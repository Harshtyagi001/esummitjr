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
  const toRotate = ["THINK", "INNOVATE", "SELL", "PROSPER"];
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
      className="h-screen w-screen grid grid-rows-3 md:grid-cols-2 md:grid-rows-2 bg-[url('/banner-bg.png')] bg-cover bg-no-repeat cursor-default"
      id="home"
    >
      <div className="flex flex-col  xs:justify-self-center xl:justify-self-start row-start-1 row-end-2 md:col-start-1 md:col-span-full md:row-span-1 md:row-start-1 font-finger xs:text-4xl xs:pt-32 sm:text-7xl sm:pt-22 md:pt-40 lg:pt-28 lg:text-8xl xl:text-[7rem] xl:leading-none justify-self-left xl:pt-60 xl:pl-20 3xl:text-[14rem]">
        <div className=" font-happy">E-SUMMIT<span className="text-[#d7a1f9]">'</span><span className='text-[#d7a1f9]'>23</span> </div>
        <div className="sm:pl-20 xs:pl-12 xl:pl-28 font-happy ">JUNIOR</div>
      </div>

      <TrackVisibility className="row-start-2 row-end-3 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3 font-finger xs:text-4xl xs:pt-12 xs:flex xs:justify-center md:pt-16 lg:mt-10 xl:justify-self-start xl:pl-64 xl:pt-32 xl:tracking-widest 3xl:text-9xl ">
        {({ isVisible }) => (
          <div
            className={isVisible ? "animate__animated animate__fadeIn " : ""}
          >
            <h1 className="xs:text-3xl md:text-5xl xl:text-6xl 3xl:text-9xl">
              {" "}
              <span
                className="txt-rotate"
                data-period="1000"
                data-rotate='[ "ACCELERATE", "INNOVATE", "SUCCEED" ]'
              >
                <span className="wrap font-happy">{text}</span>
              </span>
            </h1>

            
            <a
              href="https://unstop.com/quiz/general-quiz-competition-juniors-e-summit23-indian-institute-of-information-technology-iiit-pune-658860/amp "
              target="_blank"
              type="submit"
              className="font-bold font-primerg xs:text-2xl pt-7 xl:pt-9 tracking-wider flex md:text-[2.3rem] align-center
            border-solid border-red-500 3xl:text-6xl text-[#d7a1f9]"
            >
              Register Now{" "}
              <ArrowRightCircle
                size={25}
                className="mt-2  text-3xl ml-3 hover:transition-[ ease-in-out ] hover:duration-[0.3s] hover:ml-6 3xl:h-12 3xl:w-12"
              />
            </a>
          </div>
        )}
      </TrackVisibility>
      <TrackVisibility className="row-start-3 row-end-4 xs:justify-self-center xs:-mt-32 -mt-12 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 ">
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
