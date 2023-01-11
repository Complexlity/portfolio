import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/gh/loadingio/ldbutton@v1.0.1/dist/ldbtn.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/loadingio/loading.css@v2.0.0/dist/loading.css"
          rel="stylesheet"
        />
      </Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,600;1,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
