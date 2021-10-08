export default function MainContent({ children, id = "" }) {
  return (
    <>
      <main id={id}>{children}</main>
      <style jsx>{`
        main {
          padding-top: 5.5rem;
          padding-bottom: 3rem;
        }
      `}</style>
    </>
  );
}
