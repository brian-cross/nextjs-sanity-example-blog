import Image from "next/image";
import { urlForImage } from "../lib/sanity";

export default function MainImage({ image, altText }) {
  return (
    <>
      {image && (
        <div className="image">
          <Image
            layout="fill"
            objectFit="cover"
            src={urlForImage(image).url()}
            alt={altText || ""}
          />
        </div>
      )}

      <style jsx>{`
        .image {
          position: relative;
          height: 50vw;
          max-height: 30rem;
          margin: 2rem 0;
        }
      `}</style>
    </>
  );
}
