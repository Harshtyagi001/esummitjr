
import Parallax from "@/components/Parallax/Parallax";
import ComingSoon from "@/components/ComingSoon";



export default function Home() {

  return(
    <div>



      <Parallax />
      <div style={{zIndex:"1"}}>
      <ComingSoon/>
      </div>
      </div>
      )




import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
// import Navbar from '@/components/Navbar/'

export default function Home() {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    </Head>
    </>
  )

}
