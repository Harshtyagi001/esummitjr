import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaHourglassStart,FaHourglassHalf,FaHourglassEnd } from "react-icons/fa";




const Timeline = () => {
  return (
    <div className="xs:mx-1.5 md:mx-10">
      <h3 className=" text-white md:text-center xs:text-5xl sm:text-left sm:ml-3 md:text-7xl font-happy">
        TIMELINE
      </h3>
      <VerticalTimeline lineColor="#7e32cf">
        <VerticalTimelineElement
          className="vertical-timeline-element--content "
          contentStyle={{
            background: "#000",
            color: "#fff",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "0 8px 8px 0 purple",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            fontColor: "#fff",
            fontFamily: "primerg",
            fontWeight: "bold",
            fontSize: "1.7rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #CE8CF8" }}
          date="6 April 23 - 13 April 23 "
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<FaHourglassStart />}
        >
          <h3 className="vertical-timeline-element-title  text-2xl text-indigo-200 font-arkhip">
          Registration:
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[#CE8CF8] text-1xl font-primelt">
            Registration Ongoing:
          </h4>
          <p className="text-gray-300 font-primelt">
            Registration is Ongoing on unstop.<br/>
            Deadline: 13th April 11:59pm
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--content "
          contentStyle={{
            background: "#000",
            color: "#fff",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "0 8px 8px 0 purple",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            fontColor: "#AACCFF",
            fontFamily: "primerg",
            fontWeight: "bold",
            fontSize: "1.5rem",
            hover: { color: "black", fontColor: "white" },
          }}
          contentArrowStyle={{ borderRight: "7px solid  #CE8CF8" }}
          date="6 April 23 - 13 April 23"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<FaHourglassHalf />}
        >
          <h3 className="vertical-timeline-element-title  text-2xl text-indigo-200 font-arkhip">
            Round 1:
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[#CE8CF8] text-1xl font-primelt">
            Test your skills:
          </h4>
          <p className="text-gray-300 font-primelt">
          The first round of E-Summit’23 Jr will be held offline at your respective schools.
          If the corresponding school can’t host round 1, it will take place at the campus of IIIT Pune
          on the 8th and 9th of April.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--content "
          contentStyle={{
            background: "#000",
            color: "#fff",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "0 8px 8px 0 purple",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            fontColor: "#AACCFF",
            fontFamily: "primerg",
            fontWeight: "bold",
            fontSize: "1.5rem",
            hover: { color: "black", fontColor: "white" },
          }}
          contentArrowStyle={{ borderRight: "7px solid  #CE8CF8" }}
          date="15 April 23 - 16 April 23"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<FaHourglassEnd />}
        >
          <h3 className="vertical-timeline-element-title  text-2xl text-indigo-200 font-arkhip">
            Round 2:
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[#CE8CF8] text-1xl font-primelt">
            Endgame:
          </h4>
          <p className="text-gray-300 font-primelt">
          The finale of E-Summit’23 Jr will be held at the campus of the Indian Institute of Information Technology, Pune,
           on the 15th-16th of April.More details about the final round will be announced soon to the finalists.

          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Timeline;

// export default Timeline;
