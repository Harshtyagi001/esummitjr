import Parallax from "@/components/Parallax/Parallax";
import ComingSoon from "@/components/ComingSoon";
import Head from "next/head";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title> E-Summit '23 Jr | IIIT Pune </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Parallax /> */}
      <section style={{position:'relative',height:'100vh',width:'100vw',margin:0,padding:0}}>
      <Navbar/>
      <div className="background"></div>
      <Parallax />
      </section>
      {/* <section style={{position:'relative',height:'100vh',width:'100vw',margin:0,padding:0}}>
      <About />
      </section> */}
<section style={{position:'relative',height:'auto',width:'100vw',padding:0 , }}>
      <About/>
      
      </section>
<Contact/>

        {/* <ComingSoon /> */}
        {/* <About/> */}
    </div>
  );
}
