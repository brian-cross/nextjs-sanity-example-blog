import Link from "next/link";
import Container from "./Container";

export default function Header({ transparent }) {
  return (
    <>
      <header className={transparent ? "transparent" : "opaque"}>
        <Container>
          <div className="content">
            <Link href="/">
              <a className="home">HB</a>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a className="navlink">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="navlink">Blog</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Container>
      </header>
      <style jsx>{`
        header {
          position: fixed;
          z-index: 1;
          width: 100%;
          top: 0;
          padding: 1em 0;
          border-bottom: 1px solid #ccc;
          transition: 0.2s ease-in;
        }

        header.transparent {
          color: white;
          background-color: transparent;
        }

        header.opaque {
          color: black;
          background-color: white;
        }

        .content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        a {
          text-decoration: none;
        }

        .home {
          font-weight: bold;
          font-size: clamp(2rem, 5vw, 3rem);
        }

        a:hover {
          color: currentColor;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        li {
          display: inline-block;
          margin-left: 2em;
        }
      `}</style>
    </>
  );
}
