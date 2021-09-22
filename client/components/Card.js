import Image from "next/image";

export default function Card() {
  return (
    <>
      <article>
        <div className="text">
          <h1 className="font-size-md">This is the title of the post</h1>
          <h2 className="font-size-sm">Author Name</h2>
        </div>
        <div className="image">
          <Image
            src="/images/hero-bg.jpg"
            layout="fill"
            objectFit="cover"
            alt="The alt text"
          />
        </div>
        <div className="text">
          <ul>
            <li>Tag 1</li>
            <li>Tag 2</li>
            <li>Tag 3</li>
          </ul>
          <time>January 1, 2021</time>
        </div>
      </article>
      <style jsx>{`
        article {
          width: 100%;
          max-width: 30rem;
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
          gap: 2em;
          font-weight: bold;
        }

        time {
          color: #666;
        }
      `}</style>
    </>
  );
}
