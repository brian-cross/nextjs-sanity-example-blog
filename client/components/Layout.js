import Header from "./Header";
import Footer from "./Footer";
import PreviewAlert from "./PreviewAlert";

export default function Layout({
  children,
  preview = false,
  headerTransparent = false,
}) {
  return (
    <>
      <Header transparent={headerTransparent} />
      {preview && <PreviewAlert />}
      {children}
      <Footer />
    </>
  );
}
