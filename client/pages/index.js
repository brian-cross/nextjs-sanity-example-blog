import Hero from "../components/Hero";
import Card from "../components/Card";
import Layout from "../components/Layout";
import CardGrid from "../components/CardGrid";
import Container from "../components/Container";
import MainContent from "../components/MainContent";
import { groq } from "next-sanity";
import { sanityClient } from "../lib/sanity.server";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useState } from "react";

export default function Home({ hero, posts }) {
  const [headerTransparent, setHeaderTransparent] = useState(true);

  useScrollPosition(({ _, currPos }) => {
    if (currPos.y < -20) setHeaderTransparent(false);
    if (currPos.y > -10) setHeaderTransparent(true);
  });

  return (
    <>
      <Layout headerTransparent={headerTransparent}>
        <Hero
          heading={hero?.heading}
          tagLine={hero?.tagLine}
          image={hero?.image}
        />
        <Container>
          <MainContent id="blog-posts">
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
          </MainContent>
        </Container>
      </Layout>
      <style jsx>{`
        h3 {
          font-weight: bold;
          margin: 0.67em 0;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const heroQuery = groq`
  *[_type == "hero"][0]{
    heading,
    tagLine,
    image{
      ...,
      "placeholder": asset->metadata.lqip
    }
  }
  `;

  const postQuery = groq`
  *[_type == "post"] | order(_createdAt asc) {
    _id,
    title,
    subtitle,
    author->{name},
    mainImage{
      ...,
      "placeholder": asset->metadata.lqip
    },
    publishedDate,
    "slug": slug.current,
    "tags": tags[]->tagName,
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
