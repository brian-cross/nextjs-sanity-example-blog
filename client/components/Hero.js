import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <>
      <div className="outer">
        <HeroImage source="/images/hero-bg.jpg" />
        <div className="container">
          <h1 className="font-size-xxl-fluid">Hello Blog</h1>
          <h2 className="font-size-lg-fluid">
            An example blog powered by a user friendly content management system
          </h2>
        </div>
      </div>
      <style jsx>{`
        .outer {
          position: relative;
          height: 100vh;
          color: white;
        }

        .container {
          position: relative;
          height: 100vh;
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
