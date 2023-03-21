import {
  MouseParallaxChild,
  MouseParallaxContainer
} from "react-parallax-mouse";
// import "./styles.css";

export default function Parallax() {
  return (
    <>
      <div
        style={{
          height: "50%",
          width: "50%",
          // background: "#01011A",
          zIndex: "5",
          // color: "#fff",
          // position: "absolute",
          // top: "50%",
          // left:"50%"

          // overflow: "hidden"
        }}
      >
        <div className="item-center flex flex-col justify-center h-full w-full absolute">
          
          <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100%",
              height: "100%",
              display:"grid",
              gridTemplateColumns:"repeat(16, 1fr)",

              // overflow:"hidden"
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
            
          >
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                transform: "scale(1.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%"
              }}
            >
              
              {/* <img height="50%" src="1.svg" alt="" className="mx-0 my-0"/> */}
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                transform: "scale(1.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%"
              }}
            >
              
              {/* <img height="50%" src="1.svg" alt="" className="mx-0 my-0"/> */}
            </MouseParallaxChild>
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
              <img height="50%" src="6.svg" alt="" className="px-0 py-0" />
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
                height: "100%"
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
                transform: "scale(1.5)",

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
                height: "100%"
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
                height: "100%"
              }}
            >
              <img height="50%" src="12.svg" alt="" className="px-0 py-0" />
            </MouseParallaxChild>
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
              
              {/* <img height="50%" src="1.svg" alt="" className="mx-0 my-0"/> */}
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.5}
              factorY={0.5}
              style={{
                transform: "scale(1.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%"
              }}
            >
              
              {/* <img height="50%" src="1.svg" alt="" className="mx-0 my-0"/> */}
            </MouseParallaxChild>
              
              
              
           
          </MouseParallaxContainer>
        </div>
      </div>
    </>
  );
}
// export default Parallax;