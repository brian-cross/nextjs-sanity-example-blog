import Container from "./Container";
import { useRouter } from "next/router";

export default function PreviewAlert() {
  const router = useRouter();

  return (
    <>
      <Container>
        <div className="content">
          <a href={`/api/exitPreview/?slug=${router.asPath}`}>
            Previewing. Click to exit.
          </a>
        </div>
      </Container>
      <style jsx>{`
        .content {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
        }
      `}</style>
    </>
  );
}
