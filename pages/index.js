import Parallax from "@/components/Parallax/Parallax";
import ComingSoon from "@/components/ComingSoon";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title> E-Summit '23 Jr | IIIT Pune </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax />
      <div style={{ zIndex: "1" }}>
        <ComingSoon />
      </div>
    </div>
  );
}
