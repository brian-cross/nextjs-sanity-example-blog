import Image from "next/image";
import { urlForImage } from "../lib/sanity";

export default function Avatar({ image }) {
  return (
    <>
      <div className="avatar">
        {image && (
          <Image
            layout="fill"
            objectFit="cover"
            src={urlForImage(image).url()}
            alt=""
          />
        )}
      </div>
      <style jsx>{`
        .avatar {
          position: relative;
          overflow: hidden;
          height: 3rem;
          width: 3rem;
          border-radius: 1.5rem;
        }
      `}</style>
    </>
  );
}
