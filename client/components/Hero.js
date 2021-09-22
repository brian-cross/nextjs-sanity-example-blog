import Image from "next/image";
import css from "styled-jsx/css";

export default function Hero() {
  // For styling the Image component
  const { className: imageClass, styles: imageStyles } = css.resolve`
    img {
      filter: brightness(50%);
    }
  `;

  return (
    <>
      <div className="outer">
        <Image
          className={imageClass}
          src="/images/hero-bg.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
        <div className="container">
          <h1 className="">Hello Blog</h1>
          <p className="">
            An example blog powered by a user friendly content management system
          </p>
        </div>
      </div>
      {imageStyles}
      <style jsx>{`
        .outer {
          position: relative;
          min-height: 100vh;
          color: white;
        }

        .hero {
          filter: brightness(50%);
        }

        .container {
          position: relative;
          width: 90%;
          height: 100vh;
          margin: 0 auto;
        }

        h1 {
          font-size: clamp(3rem, 12vw, 9rem);
          font-weight: bold;
          margin: 0;
          padding-top: 12vh;
        }

        p {
          position: absolute;
          font-size: clamp(1rem, 4vw, 3rem);
          font-weight: bold;
          text-align: right;
          line-height: 1.5;
          max-width: 64rem;
          margin: 0;
          bottom: 17vh;
          right: 0;
        }

        @media (orientation: landscape) and (max-height: 40rem) {
          h1 {
            font-size: clamp(3rem, 12vh, 9rem);
          }

          p {
            font-size: clamp(1rem, 4vh, 3rem);
          }
        }
      `}</style>
    </>
  );
}
