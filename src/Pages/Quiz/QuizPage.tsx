import "./QuizPage.css";
import { MdNavigateNext, MdNavigateBefore, MdTimer } from "react-icons/md";
import React from "react";

export const QuizPage: React.FC = () => {
  return (
    <div className="content quiz-container">
      <h3 className="headline3 text-center mt-1 mb-2">
        Diddle diddle diddle, time for a riddle.{" "}
      </h3>

      <div className="flex space-between align-center mb-1 ">
        <button className="btn btn-text text-on-button red">Quit</button>
        <div className="ml-auto mb-1 flex align-center">
          <MdTimer className="md-icons1" />
          <span className="subtitle2 alignself-center ml-1">{"00:00"}</span>
        </div>
      </div>
      <div className="flex space-between  mb-1">
        <span className="subtitle-2 ">
          <span className="text-black-01">Question:</span>1/5
        </span>
        <span className="subtitle-2 ">
          <span className="text-black-01">Score:</span>0
        </span>
      </div>
      <p className="body1 text-center mb-2">What is name of Batman's son ?</p>
      <div className="flex flex-column">
        {[...Array(4)].map((el,i) => (
          <>
            <input
              type="radio"
              id={`${i}`}
              name="options"
              value={"Dick Grayson"}
              className="display-none"
            />
            <label htmlFor={`${i}`} className="btn large mb-1">
              Dick Grayson
            </label>
          </>
        ))}
      </div>
      <div className="flex space-between max-width mt-1">
        <MdNavigateBefore className="md-icons" />
        <MdNavigateNext className="md-icons" />
      </div>
    </div>
  );
};
