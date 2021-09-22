import Link from "next/link";
import Hero from "../components/Hero";
import { sanityClient } from "../lib/sanity.server";
import { groq } from "next-sanity";

export default function Home({ posts }) {
  return (
    <>
      <Hero />
      <main className="container">
        <h3 className="font-size-lg">Blog Posts</h3>
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <style jsx>{`
        h3 {
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const query = groq`
  *[_type == "post"] | order(_createdAt asc) {
    _id,
    title,
    "slug": slug.current
  }
  `;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
}
