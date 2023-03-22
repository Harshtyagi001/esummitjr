import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
// import "./styles.css";
const Model = dynamic(
  () => import('../Model'),
  { ssr: false }
)
import dynamic from 'next/dynamic'
import { createMedia } from "@artsy/fresnel";


export default function Parallax() {
  return (
    <>
          <div className="md:hidden w-screen h-full "
        style={{
          height: "100%",
          width: "100%",
          // zIndex: "5",
        }}
      >
        <div className="esum item-center flex flex-col justify-center h-full w-full absolute top-[25%]">
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              height: "100%",
              display:"grid",
              gridTemplateRows:"1fr 1fr 2fr",
              gridTemplateColumns:"2fr 5fr 2fr",

              // overflow:"hidden"
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
          <div></div>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.2}
              style={{
                transform: "scale(1.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%"
              }}
            >
              
              <img height="100%" width="100%" src="E-SUMMIT'23.svg" alt="" className=" mx-0 my-0"/>
              
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className=" item-center flex flex-col justify-center h-full w-full absolute top-[39%]">
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              height: "100%",
              display:"grid",
              gridTemplateRows:"1fr 1fr 2fr",
              gridTemplateColumns:"2fr 5fr 2fr",

              // overflow:"hidden"
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
          <div></div>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.05}
              style={{
                transform: "scale(1.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%"
              }}
            >

              <img height="100%" width="80%" src="junior.svg" alt="" className="mx-0 my-0"/>

            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className="">
          <Model />
        </div>
      </div>


{/* medium and greater */}


      <div className="hidden md:inline-block"
        style={{
          height: "100%",
          width: "80%",
          zIndex: "5",

          position: "absolute",
          top: "0%",
          left:"10%"


        }}
      >
        <div className="item-center flex flex-col justify-center h-full w-full absolute">

          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              height: "100%",
              display:"grid",
              gridTemplateColumns:"1fr repeat(12, 1fr) 1fr 4fr",

              // overflow:"hidden"
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave

          >
            <div></div>

            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              style={{
                transform: "scale(1.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%"
              }}
            >

              <img height="50%" src="1.svg" alt="" className="mx-0 my-0"/>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%"
              }}
            >
              <img height="50%" src="13.svg" alt="" className="mx-0 my-0" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
                transform: "scale(1.5)",

              }}
            >
              <img height="50%" src="2.svg" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%"
              }}
            >
              <img height="50%" src="3.svg" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%"
              }}
            >
              <img height="50%" src="4.svg" alt="" className="px-0 py-0" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
                transform: "scale(1.5)",

              }}
            >
              <img height="50%" src="5.svg" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.1}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%"
              }}
            >
            <div className="p-[0.45rem] md:p-3 lg:p-2">
              <img height="50%" src="6.svg" alt="" className="px-0 py-0" />
              </div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.2}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%"
              }}
            >
              <img height="50%" src="7.svg" alt="" className="px-0 py-0" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
                transform: "translate(15%,-9%)",
              }}
            >
              <img height="50%" src="8.svg" alt="" className="px-0 py-0" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",
                transform: "scale(1.3)",


              }}
            >
              <img height="50%" src="9.svg" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.05}
              factorY={0.05}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",

              }}
            >
              <img height="50%" src="10.svg" alt="" className="px-0 py-0" />
            </MouseParallaxChild>

            <MouseParallaxChild
              factorX={0.1}
              factorY={0.1}
              style={{
                // filter: "invert(1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "100%",

              }}
            >
              <img height="50%" src="12.svg" alt="" className="px-0 py-0" />
            </MouseParallaxChild>
            <div></div>
            <div>
            <Model/>
            </div>

          </MouseParallaxContainer>
        </div>
        
      </div>
      
      
    </>
  );
}
// export default Parallax;