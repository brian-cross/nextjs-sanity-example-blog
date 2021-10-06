import Link from "next/link";
import Hero from "../components/Hero";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import Container from "../components/Container";
import { groq } from "next-sanity";
import { sanityClient } from "../lib/sanity.server";
import Layout from "../components/Layout";

export default function Home({ hero, posts }) {
  return (
    <>
      <Layout>
        <Hero
          heading={hero?.heading}
          tagLine={hero?.tagLine}
          image={hero?.image}
        />
        <Container>
          <main>
            <h3 className="font-size-xl-fluid">Blog Posts</h3>
            <CardGrid>
              {posts &&
                posts.map(post => {
                  return (
                    <Card
                      key={post._id}
                      title={post?.title}
                      author={post?.author?.name}
                      image={post?.mainImage}
                      altText={post?.mainImage?.altText}
                      tags={post?.tags}
                      date={post?.publishedDate}
                      slug={post?.slug}
                    />
                  );
                })}
            </CardGrid>
          </main>
        </Container>
      </Layout>
      <style jsx>{`
        h3 {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const heroQuery = groq`
  *[_type == "hero"]{heading, tagLine, image}[0]
  `;

  const postQuery = groq`
  *[_type == "post"] | order(_createdAt asc) {
    _id,
    title,
    subtitle,
    author->{name},
    mainImage,
    publishedDate,
    "slug": slug.current,
    "tags": tags[]->tagName
}
  `;

  const [hero, posts] = await Promise.all([
    sanityClient.fetch(heroQuery),
    sanityClient.fetch(postQuery),
  ]);

  return {
    props: {
      hero,
      posts,
    },
  };
}
