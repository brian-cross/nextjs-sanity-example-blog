import Image from "next/image";
import { useRef, useState } from "react";
import { urlForImage } from "../lib/sanity";

export default function HeroImage({ image }) {
  const placeholderRef = useRef();
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  return (
    <>
      {image && (
        <div
          style={{ position: "absolute", inset: 0, filter: "brightness(50%)" }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={urlForImage(image).url()}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt=""
              onLoadingComplete={() => setPlaceholderVisible(false)}
            />
          </div>
          <div className="placeholder-wrapper">
            <div className="placeholder" ref={placeholderRef}></div>
          </div>
        </div>
      )}

      <style jsx>{`
        .placeholder-wrapper {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .placeholder {
          height: 100%;
          width: 100%;
          background-image: url(${image?.placeholder});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          filter: blur(20px);
          transform: scale(1.2);
          transition: opacity 0.3s linear;
          ${placeholderVisible ? "opacity: 1;" : "opacity: 0;"}
        }
      `}</style>
    </>
  );
}
