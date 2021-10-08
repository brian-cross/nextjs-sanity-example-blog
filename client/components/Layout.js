import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({
  children,
  preview = false,
  headerTransparent = false,
}) {
  const router = useRouter();

  return (
    <>
      <Header transparent={headerTransparent} />
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
