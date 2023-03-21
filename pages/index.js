import Head from "next/head";
import Parallax from "@/components/Parallax/Parallax";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
// import Model from "@/components/Model";

import dynamic from 'next/dynamic'
import Navbar from "@/components/Navbar";

const Model = dynamic(
  () => import('../components/Model'),
  { ssr: false }
)
export default function Home() {
  return(
    
     <div>
     <Navbar/>
      <Parallax />
      <Model />
      </div>
     
    
  )
}
