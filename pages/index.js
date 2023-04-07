
import Head from "next/head";

import Timeline from "../components/Timeline";
import FAQ from "@/components/FAQ/FAQ";

import { Bannera } from "@/components/Banner";


export default function Home() {
  return (
    <div>
      <Head>
        <title> E-Summit '23 Jr | IIIT Pune </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="parallaxSection"style={{position:'relative',height:'100vh',width:'100vw',margin:0,padding:0,overflowX:"hidden", overflowY:"hidden" }}>
     
      
      <Bannera/>
      
      
      </section>
      <section style={{position:'relative',filter:'vignette(40%)',height:'auto',width:'100vw',padding:0 ,background: 'linear-gradient(180deg, #08090c 0%, #425870 100%)'}}>
      <Timeline/>
      </section>
      <section style={{position:'relative',filter:'vignette(40%)',height:'100vh',width:'100vw',padding:0 }}>
      <FAQ/>
      </section>
      {/* <Banner/> */}
     

    </div>
  );
}
