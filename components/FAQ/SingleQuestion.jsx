import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import styles from "./Faqs.module.css";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="hover:cursor-pointer font-primelt">
        <div
          onClick={() => setShowAnswer(!showAnswer)}
          className={showAnswer ? `${styles.faqopen}` : `${styles.faq}`}
        >
          <h2 className=" text-2xl  tracking-wider cursor-pointer  font-primelt">
            {question}
          </h2>
          {showAnswer ? (
            <button>
              <FaMinus className={`${styles.iconB}`} />
            </button>
          ) : (
            <button>
              <BsPlus className={`${styles.iconA}`} />
            </button>
          )}
        </div>
        <div className={`${styles.faq_ans}`}>
          {showAnswer && <p className="text-[1.2rem] font-primerg">{answer}</p>}
        </div>
      </div>
    </>
  );
}