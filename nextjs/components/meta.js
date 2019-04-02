import Head from "next/head";
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width-device-width, initial scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>
      {`
        body {
          box-sizing: border-box;
          font-size: 62.5%;
          margin: 0;
        }
      `}
    </style>
  </div>
);
