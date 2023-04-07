
import Head from "next/head";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import Timeline from "../components/Timeline";
import FAQ from "@/components/FAQ/FAQ";
import { Banner } from "@/components/Banner";
import {useState, useEffect} from 'react'
import Loader from "@/components/Loader";
// import {BsFillArrowUpCircleFill} from 'react-icons/bs'
const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


export default function Home() {
  const [load, setload] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setload(false);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Head>
        <title> E-Summit '23 Jr | IIIT Pune </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {load ? (
        <Loader />
      ) : (
        <>
      <Navbar/>
      <section id="home" className="parallaxSection xs:h-[110vh] sm:h-[120vh] lg:h-auto"style={{position:'relative',width:'100vw',margin:0,padding:0,overflowX:"hidden", overflowY:"hidden" }}>
     
      
      <Banner/>
      
      
      </section>
      <section 
        className="mb-[5%]"
        style={{
          position: "relative",
          filter: "vignette(40%)",
          height: "auto",
          width: "100%",
          padding: 0,
        }}
      >
        <About />
      </section>

      <section
        className="mb-[5%]"
        style={{
          position: "relative",
          filter: "vignette(40%)",
          height: "auto",
          width: "100%",
          padding: 0,
          marginTop:"10%"
        }}
      >
        <Timeline />
      </section>
      <section
        className="mb-[5%]"
        style={{
          position: "relative",
          filter: "vignette(40%)",
          height: "auto",
          width: "100%",
          padding: 0,
        }}
      >
        <FAQ />
      </section>

      <section
        className="mb-[5%]"
        style={{
          position: "relative",
          filter: "vignette(40%)",
          height: "auto",
          width: "100%",
          padding: 0,
        }}
      >
        <Contact />
      </section>
      </>
      )}
      {/* <button onClick={scrollToTop()} className="absolute bottom-2 right-2 h-20 w-20 float fixed"><BsFillArrowUpCircleFill/></button> */}
    </div>
  );
}
