import Container from "./Container";
import HeroImage from "./HeroImage";

export default function Hero({ heading, tagLine, image }) {
  return (
    <>
      <div className="outer" id="top-of-page">
        <HeroImage image={image} />
        <Container>
          <div className="hero-content">
            <h1 className="font-size-xxl-fluid">{heading}</h1>
            <h2 className="font-size-lg-fluid">{tagLine}</h2>
          </div>
        </Container>
      </div>
      <style jsx>{`
        .outer {
          position: relative;
          height: 100vh;
          color: white;
        }

        .hero-content {
          position: relative;
          height: 100vh;
        }

        h1 {
          font-weight: bold;
          margin: 0;
          padding-top: 20vh;
        }

        h2 {
          position: absolute;
          font-weight: bold;
          text-align: right;
          line-height: 1.5;
          max-width: 64rem;
          margin: 0;
          bottom: 17vh;
          right: 0;
        }

        @media (max-width: 64rem) {
          h1,
          h2 {
            text-align: center;
          }

          h1 {
            padding-top: 33vh;
          }

          h2 {
            position: static;
            margin-top: min(8em, 33vh);
          }
        }
      `}</style>
    </>
  );
}
