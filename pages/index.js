
import Head from "next/head";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import Timeline from "../components/Timeline";
import FAQ from "@/components/FAQ/FAQ";
import { Banner } from "@/components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title> E-Summit '23 Jr | IIIT Pune </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <section className="parallaxSection xs:h-[110vh] sm:h-[120vh] lg:h-auto"style={{position:'relative',width:'100vw',margin:0,padding:0,overflowX:"hidden", overflowY:"hidden" }}>
     
      
      <Banner/>
      
      
      </section>
      <section className="mb-[5%]" style={{position:'relative',filter:'vignette(40%)',height:'auto',width:'100%',padding:0 }}>
      <About/>
      </section>

      <section className="mb-[5%]" style={{position:'relative',filter:'vignette(40%)',height:'auto',width:'100%',padding:0 }}>
      <Timeline/>
      </section>
      <section className="mb-[5%]" style={{position:'relative',filter:'vignette(40%)',height:'auto',width:'100%',padding:0 }}>
      <FAQ/>
      </section>
      {/* <Banner/> */}
      <section className="mb-[5%]" style={{position:'relative',filter:'vignette(40%)',height:'auto',width:'100%',padding:0 }}>
      <Contact/>
      </section>
    </div>
  );
}
