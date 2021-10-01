export default function Container({ children, narrow }) {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          width: 90%;
          max-width: ${narrow ? "50rem" : "100rem"};
          margin: 0 auto;
        }
      `}</style>
    </>
  );
}
