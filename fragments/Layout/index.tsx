import { ReactNode } from "react";
import Head from "next/head";
import { Footer } from "../../components";

type Props = {
  children?: ReactNode;
  title: string;
  description: string;
};

const Layout = ({ children, title, description }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:image" content="/ogimage.png" key="ogimage" />
    </Head>
    {children}
    <Footer />
  </>
);

export default Layout;
