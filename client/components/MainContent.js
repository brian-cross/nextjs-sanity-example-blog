export default function MainContent({ children }) {
  return (
    <>
      <main>{children}</main>
      <style jsx>{`
        main {
          margin-top: var(--xxl-fluid);
          margin-bottom: var(--xl-fluid);
        }
      `}</style>
    </>
  );
}
