import Image from "next/image";

export default function Card({ title, author, image, altText, tags, date }) {
  return (
    <>
      <article>
        <div className="text">
          <h1 className="font-size-md">{title}</h1>
          <h2 className="font-size-sm">{author}</h2>
        </div>
        <div className="image">
          <Image src={image} layout="fill" objectFit="cover" alt={altText} />
        </div>
        <div className="text">
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <time>{date}</time>
        </div>
      </article>
      <style jsx>{`
        article {
          width: 100%;
           {
            /* max-width: 30rem; */
          }
          box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.25);
        }

        .text {
          padding: 2rem;
        }

        h1 {
          margin-top: 0;
        }

        h2 {
          margin-bottom: 0;
          font-weight: normal;
        }

        .image {
          position: relative;
          width: 100%;
          height: 15rem;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5em 1.25em;
          font-weight: bold;
        }

        time {
          color: #666;
        }
      `}</style>
    </>
  );
}
