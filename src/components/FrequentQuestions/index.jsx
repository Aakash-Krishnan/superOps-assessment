import { useState } from "react";
import Dropdown from "../Dropdown";

import "./style.css";

const questions = [
  {
    title: "Is there an eligibility to be a SuperOps.ai affiliate?",
    subTitle:
      "If you’re someone who’s passionate about educating or adding value to the channel, you’re a fit. You could be: ",
    points: [
      "An MSP owner",
      "A geek who’s passionate about MSPs",
      "An MSP sales/marketing coach",
      "Anyone who works with MSPs",
    ],
  },
  {
    title: "What is a valid sign-up?",
    subTitle: "Sub title 2",
    points: [
      "An MSP owner",
      "A geek who’s passionate about MSPs",
      "An MSP sales/marketing coach",
      "Anyone who works with MSPs",
    ],
  },
  {
    title: "When will my commissions be paid?",
    subTitle: "Sub title 3",
    points: [
      "An MSP owner",
      "A geek who’s passionate about MSPs",
      "An MSP sales/marketing coach",
      "Anyone who works with MSPs",
    ],
  },
  {
    title: "What if my prospect upgrades/downgrades during the first year?",
    subTitle: "Sub title 3",
    points: [
      "An MSP owner",
      "A geek who’s passionate about MSPs",
      "An MSP sales/marketing coach",
      "Anyone who works with MSPs",
    ],
    style: (
      <>
        <h1>Hello</h1>
      </>
    ),
  },
];

const FrequentQuestions = () => {
  const [isVisible, setIsVisible] = useState(0);

  return (
    <div className="freq-container">
      <div className="title-div">
        <p className="freq-title">Frequently asked questions</p>
        <p className="sub">We have them answered.</p>
      </div>

      <div className="questions-container">
        {questions.map((question, idx) => {
          return (
            <div key={question.title}>
              <Dropdown
                title={question.title}
                subTitle={question.subTitle}
                points={question.points}
                visibility={() => setIsVisible(idx)}
                isVisible={isVisible === idx ? true : false}
                style={question.style}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentQuestions;
