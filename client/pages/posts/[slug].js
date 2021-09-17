import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "../../lib/sanity.server";
import { urlForImage } from "../../lib/sanity";
import { groq } from "next-sanity";

export default function Post({ post }) {
  return (
    <>
      <h2>{post.title}</h2>
      <h3>{post.subtitle}</h3>
      <p>{post._createdAt}</p>
      {post.authors.map((author, index) => (
        <p key={index}>{author}</p>
      ))}
      <p>{post.body}</p>
      <Image
        width={600}
        height={400}
        src={urlForImage(post.image).width(600).height(400).url()}
        alt="Cassette Tapes"
      />
    </>
  );
}

export async function getStaticPaths() {
  const query = groq`
    *[_type == "post"]{"slug": slug.current}
  `;

  const posts = await sanityClient.fetch(query);
  const paths = posts.map(post => `/posts/${post.slug}`);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const query = groq`
  *[_type == "post" && (slug.current == "${params.slug}")]{
    _id,
    _createdAt,
    title,
    subtitle,
    body,
    image,
    "slug": slug.current,
    "authors": authors[]->name
  }
  `;

  const post = await sanityClient.fetch(query);

  return {
    props: {
      post: post[0],
    },
  };
}
