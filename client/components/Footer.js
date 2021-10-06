import Container from "./Container";

export default function Footer() {
  return (
    <>
      <Container>
        <footer>
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
        </footer>
      </Container>
      <style jsx>{`
        footer {
          padding: 2em 0;
        }

        p {
          text-align: center;
        }
      `}</style>
    </>
  );
}
