import CoverImage from "./CoverImage";

export default function PostMainImage({ image, altText }) {
  return (
    <>
      {image?.asset && (
        <div className="image">
          <CoverImage image={image} altText={altText} />
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
