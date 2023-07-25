import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="title" content="ATBU DCCE Handbook" />
        <meta
          name="description"
          content="A student guide that makes learning more accessible to Department of Computer and Communication Engineering Students"
          key="desc"
        />
        <meta
          name="keywords"
          content="ATBU, DCCE, Computer Engineering, Communication Engineering, Abubakar Tafawa Balewa University, Student Handbook, ATBU Student Handbook, DCCE Student Handbook, courses"
        ></meta>
        <meta property="og:title" content="ATBU DCCE Handbook" />
        <meta
          property="og:description"
          content="A student guide that makes learning more accessible to Department of Computer and Communication Engineering Students"
        />
        <meta
          name="og:keywords"
          content="ATBU, DCCE, Computer Engineering, Communication Engineering, Abubakar Tafawa Balewa University, Student Handbook, ATBU Student Handbook, DCCE Student Handbook, courses"
        ></meta>
        <meta property="og:image" content="/public/images/dept.jpeg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
