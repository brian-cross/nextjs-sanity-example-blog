import { usePath } from "../lib/hooks";
import Footer from "./Footer";

export default function Layout({ children, preview = false }) {
  const path = usePath();

  return (
    <>
      {preview && (
        <a href={`/api/exitPreview/?slug=${path}`}>
          Previewing. Click to exit.
        </a>
      )}
      {children}
      <Footer />
    </>
  );
}
