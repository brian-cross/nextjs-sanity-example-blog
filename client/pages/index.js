import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "../lib/sanity.server";
import { urlForImage } from "../lib/sanity";
import { groq } from "next-sanity";

export default function Home({ posts }) {
  return (
    <div>
      <h1>Hello Blog!</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const query = groq`
  *[_type == "post"]{
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
