import Link from "next/link";
import CoverImage from "./CoverImage";
import formatIsoDate from "../lib/formatIsoDate";

export default function Card({
  title,
  author,
  image,
  altText,
  tags,
  date,
  slug,
}) {
  return (
    <>
      <article>
        <div className="text">
          <h1 className="font-size-md-fixed">
            <Link href={`/posts/${slug}`}>
              <a>{title}</a>
            </Link>
          </h1>
          <h2 className="font-size-reg-fixed">{author || "No Author"}</h2>
        </div>
        <Link href={`/posts/${slug}`}>
          <a>
            <div className="image">
              {image && <CoverImage image={image} alt={altText} />}
            </div>
          </a>
        </Link>
        <div className="text">
          <ul>
            {tags ? (
              tags.map((tag, index) => <li key={index}>{tag}</li>)
            ) : (
              <li>Uncategorized</li>
            )}
          </ul>
          <time>{date && formatIsoDate(date)}</time>
        </div>
      </article>
      <style jsx>{`
        article {
          width: 100%;
          /* max-width: 30rem; */
          box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.25);
          transition: transform 0.15s ease-in-out;
          pointer-events: none;
        }

        @media (hover: hover) {
          article:hover {
            transform: translateY(-1%);
          }
        }

        a {
          pointer-events: auto;
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
