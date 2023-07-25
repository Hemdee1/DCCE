import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ATBU DCCE</title>
        <meta
          name="description"
          content="A student guide that makes learning more accessible to Department of Computer and Communication Engineering Students"
          key="desc"
        />
        <meta property="og:title" content="ATBU DCCE Handbook" />
        <meta
          property="og:description"
          content="A student guide that makes learning more accessible to Department of Computer and Communication Engineering Students"
        />
        <meta property="og:image" content="/public/images/dept.jpeg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
