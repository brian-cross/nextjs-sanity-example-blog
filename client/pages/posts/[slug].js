import Image from "next/image";
import Author from "../../components/Author";
import BlockContent from "@sanity/block-content-to-react";
import formatIsoDate from "../../lib/formatIsoDate";
import { getClient } from "../../lib/sanity.server";
import { usePreviewSubscription } from "../../lib/sanity";
import { groq } from "next-sanity";
import MainImage from "../../components/MainImage";

function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) return data;

  return data.length > 1 && preview
    ? data.filter(item => item._id.startsWith(`drafts.`)).slice(-1)[0]
    : data.slice(-1)[0];
}

export default function Post({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    initialData: data?.post,
    enabled: preview,
  });

  const post = filterDataToSingleItem(previewData, preview);

  return (
    <>
      {preview && (
        <a
          href={`/api/exitPreview${
            data?.queryParams?.slug
              ? `/?slug=/posts/${data.queryParams.slug}`
              : ``
          }`}
        >
          Previewing. Click to exit.
        </a>
      )}
      <div className="container reading-column">
        <h1 className="font-size-xl-fluid">{post?.title}</h1>
        <h2 className="font-size-md-fluid">{post?.subtitle}</h2>
        <p>{post?.publishedDate && formatIsoDate(post.publishedDate)}</p>
        <Author
          details={{
            avatar: post?.author?.avatar,
            name: post?.author?.name,
          }}
        />
        <MainImage image={post?.mainImage} altText={post?.mainImage?.altText} />
        {post?.body && (
          <BlockContent
            projectId={process.env.SANITY_PROJECT_ID}
            dataset={process.env.SANITY_DATASET}
            blocks={post.body}
            // serializers={serializers}
          />
        )}
      </div>
      <style jsx>{`
        .reading-column {
          max-width: 50rem;
        }

        h2 {
          color: #666;
          font-weight: normal;
        }
      `}</style>
    </>
  );
}

export async function getStaticPaths() {
  const query = groq`
    *[_type == "post"]{"slug": slug.current}
  `;

  const posts = await getClient().fetch(query);
  const paths = posts.map(post => `/posts/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const query = groq`
  *[_type == "post" && (slug.current == $slug)]{
    _id,
    title,
    subtitle,
    author->{name, avatar},
    mainImage,
    publishedDate,
    body,
    "slug": slug.current,
  }
  `;
  const queryParams = { slug: params.slug };

  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) return { notFound: true };

  const post = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { post, query, queryParams },
    },
  };
}
