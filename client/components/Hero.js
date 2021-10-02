import HeroImage from "./HeroImage";

export default function Hero({ heading, tagLine, image }) {
  return (
    <>
      <div className="outer">
        <HeroImage image={image} />
        <div className="hero-content">
          <h1 className="font-size-xxl-fluid">{heading}</h1>
          <h2 className="font-size-lg-fluid">{tagLine}</h2>
        </div>
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
          max-width: 90%;
          margin: 0 auto;
        }

        h1 {
          font-weight: bold;
          margin: 0;
          padding-top: 12vh;
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
      `}</style>
    </>
  );
}
