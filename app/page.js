import Head from "next/head";
import Animation from "../app/animation/animation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TULAS Animation</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
        />
      </Head>
      <main>
        <Animation />
      </main>
    </div>
  );
}
