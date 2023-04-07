import { useState, useEffect } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["THINK", "INNOVATE", "SUCCEED"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (

    <section
      className="h-screen w-screen grid grid-rows-3 md:grid-cols-2 md:grid-rows-2 bg-[url('/banner-bg.png')] bg-cover bg-no-repeat"
      id="home"
    >
   
      <div className="flex flex-col  xs:justify-self-center xl:justify-self-start row-start-1 row-end-2 md:col-start-1 md:col-span-full md:row-span-1 md:row-start-1 font-finger xs:text-5xl xs:pt-16 sm:text-7xl sm:pt-20 lg:pt-20 lg:text-8xl xl:text-[7rem] xl:leading-none justify-self-left  xl:pt-40 xl:pl-28 2xl:text-[14rem]">
        <div className="">E-SUMMIT'23 </div><div className="sm:pl-20 xs:pl-12 xl:pl-28 ">JUNIOR</div> 
      </div>

      <TrackVisibility className="row-start-2 row-end-3 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 font-finger xs:text-4xl  xs:flex xs:justify-center lg:mt-10 xl:justify-self-start xl:pl-64 xl:pt-32 xl:tracking-widest 2xl:text-9xl">
        {({ isVisible }) => (
          <div
            className={isVisible ? "animate__animated animate__fadeIn " : ""}
          >
            <h1 className="xs:text-5xl xl:text-6xl 2xl:text-9xl">
              {" "}
              <span
                className="txt-rotate"
                data-period="1000"
                data-rotate='[ "ACCELERATE", "INNOVATE", "SUCCEED" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>

            <button
              onClick={() => console.log("connect")}
              className="text-white font-bold font-poppins text-3xl pt-4 tracking-wider flex align-center
            border-solid border-red-500 2xl:text-6xl"
            >
              Register Now{" "}
              <ArrowRightCircle
                size={25}
                className="mt-2  text-3xl ml-3 hover:transition-[ ease-in-out ] hover:duration-[0.3s] hover:ml-6 2xl:h-12 2xl:w-12"
              />
            </button>
          </div>
        )}
      </TrackVisibility>
      <TrackVisibility className="row-start-3 row-end-4 xs:justify-self-center -mt-12 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 ">
        {({ isVisible }) => (
          <img
            src="header-img.svg"
            alt="Header Img"
            className="imgup h-[130%] sm:h-[120%] md:h-[100%] md:pt-64 xs:pl-8 md:pl-40 w-auto relative"
          />
        )}
      </TrackVisibility>
    </section>
  );
};
