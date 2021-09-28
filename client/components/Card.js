import Image from "next/image";
import Link from "next/link";

export default function Card({ title, author, image, altText, tags, date }) {
  return (
    <>
      <article>
        <div className="text">
          <Link href="#">
            <a>
              <h1 className="font-size-md-fixed">{title}</h1>
            </a>
          </Link>
          <h2 className="font-size-reg-fixed">{author}</h2>
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

        a {
          text-decoration: none;
          color: currentColor;
        }

        @media (hover: hover) {
          a:hover {
            color: #666;
          }
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
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5em 1.25em;
          font-weight: bold;
          margin-top: 0;
          padding: 0;
        }

        time {
          color: #666;
        }
      `}</style>
    </>
  );
}
