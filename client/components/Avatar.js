import Image from "next/image";
import { useRemToPx } from "../lib/hooks";
import { urlForImage } from "../lib/sanity";

export default function Avatar({ image, sizeInRem = 3 }) {
  const px = useRemToPx(sizeInRem);

  return (
    <>
      {image && (
        <div className="avatar">
          <Image
            width={px || 48}
            height={px || 48}
            src={urlForImage(image).url()}
            alt=""
          />
        </div>
      )}
      <style jsx>{`
        .avatar {
          overflow: hidden;
          height: ${sizeInRem}rem;
          width: ${sizeInRem}rem;
          border-radius: 1.5rem;
        }
      `}</style>
    </>
  );
}
