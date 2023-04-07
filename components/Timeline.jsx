import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import { MdOutlineAppRegistration } from "react-icons/md";
import { VscDebugStart } from "react-icons/vsc";

import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Typography } from "@mui/material";

const Timeline = () => {
  return (
    <div className="xs:mx-1.5 md:mx-10">
      <h3 className="font-finger text-white md:text-center xs:text-5xl sm:text-left sm:ml-3 md:text-7xl font-arkhip">
        TIMELINE
      </h3>
      <VerticalTimeline lineColor="#7e32cf">
        <VerticalTimelineElement
          className="vertical-timeline-element--content "
          contentStyle={{
            background: "#000",
            color: "#fff",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            fontColor: "#AACCFF",
            fontFamily: "primerg",
            fontWeight: "bold",
            fontSize: "1.5rem",
            hover: { color: "black", fontColor: "white" },
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<VscDebugStart />}
        >
          <h3 className="vertical-timeline-element-title  text-2xl text-indigo-200 font-arkhip">
            Round 1
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[#4bd5ff] text-1xl font-primerg">
            Registration Begins
          </h4>
          <p className="text-gray-300 font-primerg">
            Registration Will be Starting on date
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--content "
          contentStyle={{
            background: "#000",
            color: "#fff",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            fontColor: "#AACCFF",
            fontFamily: "primerg",
            fontWeight: "bold",
            fontSize: "1.5rem",
            hover: { color: "black", fontColor: "white" },
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<VscDebugStart />}
        >
          <h3 className="vertical-timeline-element-title  text-2xl text-indigo-200 font-arkhip">
            Round 1
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[#4bd5ff] text-1xl font-primerg">
            Registration Begins
          </h4>
          <p className="text-gray-300 font-primerg">
            Registration Will be Starting on date
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--content "
          contentStyle={{
            background: "#000",
            color: "#fff",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            fontColor: "#AACCFF",
            fontFamily: "primerg",
            fontWeight: "bold",
            fontSize: "1.5rem",
            hover: { color: "black", fontColor: "white" },
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "black", color: "#fff" }}
          icon={<VscDebugStart />}
        >
          <h3 className="vertical-timeline-element-title  text-2xl text-indigo-200 font-arkhip">
            Round 1
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-[#4bd5ff] text-1xl font-primerg">
            Registration Begins
          </h4>
          <p className="text-gray-300 font-primerg">
            Registration Will be Starting on date
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default Timeline;

// export default Timeline;
