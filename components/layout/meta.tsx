import Head from 'next/head';


export interface MetaProps {
  title: string;
  description: string;
  ogUrl: string;
  ogImage: string;
}

export default function Meta({ props }: { props: MetaProps }) {
  return (
    <Head>
      <title>gavinarori</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
      <meta name="theme-color" content="#7b46f6" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

    </Head>
  );
}
