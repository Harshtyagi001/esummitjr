import Head from "next/head";
import Parallax from "@/components/Parallax/Parallax";
import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
// import Model from "@/components/Model";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";


import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import moonImage from "../public/moon.jpg";
import venusImage from "../public/venus.jpg";
import css from "../styles/Home.module.css";
import ComingSoon from "@/components/ComingSoon";



export default function Home() {
  // useEffect(() => {
    
  //   const textureLoader = new THREE.TextureLoader();

  //       const moonTexture = textureLoader.load(moonImage);
  //       const venusTexture = textureLoader.load(venusImage);
  //       // const spaceTexture = textureLoader.load(spaceImage);


  //       const scene = new THREE.Scene();

  //       const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  //       camera.position.set(4, 4, 8);

  //       // const canvas = document.querySelector(".homeCanvas");
  //       const renderer = new THREE.WebGLRenderer({ Canvas });

  //       const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
  //       const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
  //       const moon = new THREE.Mesh(moonGeometry, moonMaterial);

  //       const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
  //       const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
  //       const venus = new THREE.Mesh(venusGeometry, venusMaterial);
  //       venus.position.set(8, 5, 5);
  //       // venus.position.set(8, 5, 2);

  //       const pointLight = new THREE.PointLight(0xffffff, 1);
  //       const pointLight2 = new THREE.PointLight(0xffffff, 0.1);

  //       pointLight.position.set(8, 5, 5);
  //       pointLight2.position.set(-8, -5, -5);


  //       // const controls = new OrbitControls(camera, renderer.domElement);

  //       scene.add(moon);
  //       scene.add(pointLight);
  //       scene.add(venus);
  //       scene.add(pointLight2);
  //       // scene.background = spaceTexture;


  //       // mesh.rotation.y += 1;
  //       const constSpeed = 0.01;
  //       window.addEventListener("mousemove", (e) => {
  //           if (e.clientX <= window.innerWidth / 2) {
  //               moon.rotation.x -= constSpeed;
  //               moon.rotation.y += constSpeed;
  //               venus.rotation.x -= constSpeed;
  //               venus.rotation.y += constSpeed;

  //           }
  //           if (e.clientX > window.innerWidth / 2) {
  //               moon.rotation.x -= constSpeed;
  //               moon.rotation.y -= constSpeed;
  //               venus.rotation.x -= constSpeed;
  //               venus.rotation.y -= constSpeed;
  //           }

  //           if (e.clientY > window.innerHeight / 2) {
  //               moon.rotation.x -= constSpeed;
  //               moon.rotation.y += constSpeed;
  //               venus.rotation.x -= constSpeed;
  //               venus.rotation.y += constSpeed;
  //           }

  //           if (e.clientY <= window.innerHeight / 2) {
  //               moon.rotation.x -= constSpeed;
  //               moon.rotation.y -= constSpeed;
  //               venus.rotation.x -= constSpeed;
  //               venus.rotation.y -= constSpeed;
  //           }
  //       })

  //       const animate = () => {
  //           requestAnimationFrame(animate);
  //           // camera.position.x += 0.01;
  //           // mesh.position.y += 0.01;
  //           moon.rotation.y += 0.001;
  //           venus.rotation.y += 0.0001;

  //           renderer.setSize(window.innerWidth, window.innerHeight);
  //           renderer.render(scene, camera);

  //       }

  //       animate();
  // }, []);
  return(
    <div>
    
   



     {/* <Navbar/> */}
     
     
      
      <Parallax />
     
      <div style={{zIndex:"1"}}>
      <ComingSoon/>
      
      </div>
      </div>
      )

      {/* // </div> */}
     
     
    
  
}
