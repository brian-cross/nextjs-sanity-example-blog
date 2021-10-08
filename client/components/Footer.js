import Container from "./Container";

export default function Footer() {
  return (
    <>
      <footer>
        <Container>
          <p>
            Powered by <a href="https://nextjs.org/">Next.js</a> and{" "}
            <a href="https://www.sanity.io/">Sanity.io</a>
          </p>
          <p>
            Source code is available on{" "}
            <a href="https://github.com/brian-cross/nextjs-sanity-example-blog">
              GitHub
            </a>
          </p>
        </Container>
      </footer>
      <style jsx>{`
        footer {
          padding: 1em 0;
          border-top: 1px solid #ccc;
        }

        p {
          text-align: center;
        }
      `}</style>
    </>
  );
}
