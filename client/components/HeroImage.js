import Image from "next/image";
import css from "styled-jsx/css";
import { urlForImage } from "../lib/sanity";

export default function HeroImage({ image }) {
  const { className: imageClass, styles: imageStyles } = css.resolve`
    img {
      filter: brightness(50%);
    }
  `;

  return (
    <>
      {image && (
        <Image
          className={imageClass}
          src={urlForImage(image).url()}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
        />
      )}
      {imageStyles}
    </>
  );
}
