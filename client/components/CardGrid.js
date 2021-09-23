export default function CardGrid({ children }) {
  return (
    <>
      <div className="card-grid">{children}</div>
      <style jsx>{`
        .card-grid {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(min(25rem, 100%), 1fr)
          );
          gap: 2rem;
        }
      `}</style>
    </>
  );
}
