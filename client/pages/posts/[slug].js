import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import formatIsoDate from "../../lib/formatIsoDate";
import { sanityClient } from "../../lib/sanity.server";
import { urlForImage } from "../../lib/sanity";
import { groq } from "next-sanity";

export default function Post({ post }) {
  // const serializers = {
  //   types: {
  //     code: props => {
  //       return (
  //         <pre>
  //           <code>{props.node.code}</code>
  //         </pre>
  //       );
  //     },
  //     block: props => {
  //       return props.node.style === "h1" ? (
  //         <h1 style={{ color: "red" }}>{props.children}</h1>
  //       ) : null;
  //     },
  //   },
  // };

  console.log(post.author.bio);

  return (
    <>
      <div className="container reading-column">
        <h1 className="font-size-xl-fluid">{post?.title}</h1>
        <h2 className="font-size-md-fluid">{post?.subtitle}</h2>
        <p>{post?.publishedDate && formatIsoDate(post.publishedDate)}</p>
        <div className="author">
          <div className="avatar">
            {post?.author?.avatar && (
              <Image
                layout="fill"
                objectFit="cover"
                src={urlForImage(post.author.avatar).url()}
                alt=""
              />
            )}
          </div>
          <span>{post?.author?.name}</span>
        </div>
        <div className="image">
          {post?.mainImage && (
            <Image
              layout="fill"
              objectFit="cover"
              src={urlForImage(post.mainImage).url()}
              alt={post.mainImage?.altText}
            />
          )}
        </div>
        <BlockContent
          projectId="3rxiqh2z"
          dataset="production"
          blocks={post?.body}
          // serializers={serializers}
        />
      </div>
      <style jsx>{`
        .reading-column {
          max-width: 50rem;
        }

        h2 {
          color: #666;
          font-weight: normal;
        }

        .image {
          position: relative;
          height: 50vw;
          max-height: 30rem;
          margin: 2rem 0;
        }

        .author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .avatar {
          position: relative;
          overflow: hidden;
          height: 3rem;
          width: 3rem;
          border-radius: 1.5rem;
        }
      `}</style>
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
    title,
    subtitle,
    author->{name, avatar, bio},
    mainImage,
    publishedDate,
    body,
    "slug": slug.current,
  }
  `;

  const post = await sanityClient.fetch(query);

  return {
    props: {
      post: post[0],
    },
  };
}
