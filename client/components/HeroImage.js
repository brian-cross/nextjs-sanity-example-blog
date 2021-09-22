import Image from "next/image";
import css from "styled-jsx/css";

export default function HeroImage({ source }) {
  const { className: imageClass, styles: imageStyles } = css.resolve`
    img {
      filter: brightness(50%);
    }
  `;

  return (
    <>
      <Image
        className={imageClass}
        src={source}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt=""
      />
      {imageStyles}
    </>
  );
}
