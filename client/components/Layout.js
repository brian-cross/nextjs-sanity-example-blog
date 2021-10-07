import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children, preview = false }) {
  const router = useRouter();

  return (
    <>
      {preview && (
        <a href={`/api/exitPreview/?slug=${router.asPath}`}>
          Previewing. Click to exit.
        </a>
      )}
      {children}
      <Footer />
    </>
  );
}
