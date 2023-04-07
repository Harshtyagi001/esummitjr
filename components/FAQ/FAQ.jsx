import { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { data } from "./data";
import "./Faqs.module.css";

export default function FaqSection() {
  const [questions] = useState(data);

  return (
    <div id="faqs" className="p-4 flex flex-col justify-center items-center">
      <div className="md:w-3/4 w-[100%] space-y-14 text-white" id="faqs">
        <div>
          <h1 className="text-center xs:text-5xl md:text-7xl font-finger" > FAQ'S</h1>
        </div>
        <div>
          {questions.map((question) => (
            <SingleQuestion {...question} key={question.id} />
          ))}
        </div>
      </div>
    </div>
  );
}