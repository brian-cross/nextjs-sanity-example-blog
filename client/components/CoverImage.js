import Image from "next/image";
import { urlForImage } from "../lib/sanity";

export default function CoverImage({ image, altText }) {
  return (
    <Image
      layout="fill"
      objectFit="cover"
      src={urlForImage(image).url()}
      alt={altText || ""}
    />
  );
}
