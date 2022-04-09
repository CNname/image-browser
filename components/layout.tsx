import Head from "next/head";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Photo Browser</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Simple photo browser uring JSONPlaceholder API"
        />
        <meta name="keywords" content="NextJS, CSS, TypeScript" />
        <meta name="author" content="CNname" />
      </Head>
      <Navigation appName="Photo Browser" />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
