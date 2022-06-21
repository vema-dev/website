import React from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Vema Solutions" />
        <meta charSet="utf-8" />
        <title>{props.pageTitle}</title>
        <meta name="robots" content="index,follow" />
        <meta name="description" content="App development, done right." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://vema.dev/assets/vema_card.jpg" />
        <meta property="og:title" content="Vema Solutions" />
        <meta
          property="og:description"
          content="App development, done right."
        />
        <meta property="og:url" content="https://margelo.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vema.dev/assets/vema_card.jpg" />
        <meta property="og:image:alt" content="Vema Solutions" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />
      </Head>
      <div>{props.children}</div>
    </div>
  );
};
export default Layout;