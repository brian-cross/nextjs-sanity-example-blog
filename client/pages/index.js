import client from "../lib/sanity";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <h1>Hello Blog!</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <h3>{post.subtitle}</h3>
          <p>{post.body}</p>
          {JSON.stringify(post.image)}
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts,
    },
  };
}
