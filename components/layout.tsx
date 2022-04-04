import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation appName="Image Browser" />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
