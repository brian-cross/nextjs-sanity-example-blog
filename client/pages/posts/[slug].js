import Layout from "../../components/Layout";
import Container from "../../components/Container";
import PostHeader from "../../components/PostHeader";
import PostMainImage from "../../components/PostMainImage";
import PostBody from "../../components/PostBody";
import { groq } from "next-sanity";
import { getClient } from "../../lib/sanity.server";
import { usePreview } from "../../lib/hooks";
import { filterDataToSingleItem } from "../../lib/sanity";

export default function Post({ data, preview }) {
  const post = usePreview(data, data?.post, preview);

  return (
    <>
      <Layout preview={preview}>
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
      </Layout>
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
