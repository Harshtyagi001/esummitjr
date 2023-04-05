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
// const isBreakpoint = useMediaQuery(768)


export default function Parallax() {
  const data = [
    {name: "1.svg", factorX: 0.2, factorY: 0.2 , className: "xs:hidden sm:hidden md:inline-block "},
    {name: "13.svg", factorX: 0.1, factorY: 0.1 , className: "xs:hidden sm:hidden md:inline-block "},
    {name: "2.svg", factorX: 0.1, factorY: 0.1, className: "xs:hidden sm:hidden md:inline-block "},
    {name: "3.svg", factorX: 0.1, factorY: 0.1, className: "xs:hidden sm:hidden md:inline-block "},
    {name: "4.svg", factorX: 0.2, factorY: 0.2, className: "xs:hidden sm:hidden md:inline-block "},
    {name: "5.svg", factorX: 0.2, factorY: 0.2, className: "xs:hidden sm:hidden md:inline-block "},
    {name: "6.svg", factorX: 0.2, factorY: 0.1, className: "xs:hidden sm:hidden md:inline-block md:h-[8%] md:h-[9%] p-[0.45rem] md:p-3 lg:p-2"},
    {name: "7.svg", factorX: 0.3, factorY: 0.2, className: "xs:hidden sm:hidden md:inline-block "},
    {name: "8.svg", factorX: 0.1, factorY: 0.1, className: "xs:hidden sm:hidden md:inline-block transform translate-x-[15%] translate-y-[-75%]"},
    {name: "9.svg", factorX: 0.1, factorY: 0.1, className: "xs:hidden sm:hidden md:inline-block "},
    {name: "10.svg", factorX: 0.05, factorY: 0.05, className: "xs:hidden sm:hidden md:inline-block "},
    {name: "11.svg", factorX: 0.1, factorY: 0.1 , className: "xs:hidden sm:hidden md:inline-block "},
  ]
  return (
    <>
    <div className="md:hidden w-screen h-full overflow-hidden"
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
              
              <img height="100%" width="100%" src="E-SUMMIT'23.svg" alt="" className=" mx-0 xs:mt-3 md:mt-0"/>
              
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

              <img height="100%" width="80%" src="https://svgshare.com/i/rNo.svg" alt="" className="mx-0 my-0"/>
              
               

            </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>
        <div className="">
          <Model />
        </div>
      </div>




{/* medium and greater */}


      <div className=""
        style={{
          height: "100%",
          width: "80%",
          zIndex: "5",

          position: "absolute",
          top: "0%",
          left:"10%",
          
          


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
            screen 768px
            {data.map(item=>{
              return(
                <MouseParallaxChild
                  factorX={item.factorX}
                  factorY={item.factorY}
                  style={{
                    // filter: "invert(1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "auto",
                    height: "100%"
                  }}
                >
                  <img height="50%" src={item.name} alt=""  className={item.className} />
                </MouseParallaxChild>
              )
            })}

            
            <div className=" xs:col-start-[7] xs:col-end-[12] sm:row-start-[1] xs:row-start-[1] md:col-start-[15] md:col-end-[16] md:row-start-[1] xs:h-[100%] xs:hidden md:inline-block" >
            <Model/>
            </div>

          </MouseParallaxContainer>
        </div>
        <div className="soon font-finger xs:text-3xl md:text-4xl lg:text-5xl text-white absolute md:inline-block top-[65%] left-[calc(55%-60px)] lg:top-[68%] left-[calc(60%-0px) ]  ">
      Coming Soon...
    </div>
      </div>
      
      
    </>
  );
}
// export default Parallax;