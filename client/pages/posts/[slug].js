import Container from "../../components/Container";
import PostHeader from "../../components/PostHeader";
import PostMainImage from "../../components/PostMainImage";
import BlockContent from "@sanity/block-content-to-react";
import { getClient } from "../../lib/sanity.server";
import { usePreviewSubscription } from "../../lib/sanity";
import { groq } from "next-sanity";
import PostBody from "../../components/PostBody";

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
      <Container narrow>
        <PostHeader
          title={post?.title}
          subtitle={post?.subtitle}
          date={post?.publishedDate}
          avatar={post?.author?.avatar}
          authorName={post?.author?.name}
        />
        <PostMainImage
          image={post?.mainImage}
          altText={post?.mainImage?.altText}
        />
        <PostBody content={post?.body} />
      </Container>
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
