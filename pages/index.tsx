import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Monatize Dashboard</title>
      </Head>
      <main className="w-full h-full">
        <div className="w-full h-full bg-blue-500"></div>
      </main>
    </div>
  );
};

export default Home;
