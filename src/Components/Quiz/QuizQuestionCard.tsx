import { MdTimer } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useQuestions } from "../../Context";
import { useEffect, useState } from "react";

export const QuizQuestionCard = ({
  questionObj,
  questionNumber,
  choice,
  setChoice,
  finishGame
}: any) => {
  const navigate = useNavigate();
  const { questionState, questionDispatch } = useQuestions();

  const quitFunction = () => {
    questionDispatch({ type: "RESET", payload: {} });
    navigate("/");
  };
  const [{ minutes, second }, setTimer] = useState({
    minutes: 1,
    second: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (second === 0) {
        if (minutes === 0) {
          clearInterval(intervalId);
          finishGame()
        } else {
          setTimer((prev) => ({ ...prev, minutes: minutes - 1 }));
          setTimer((prev) => ({ ...prev, second: 59 }));
        }
      } else {
        setTimer((prev) => ({ ...prev, second: second - 1 }));
      }
    },1000);
    return ()=>clearInterval(intervalId)
  }, [finishGame, minutes, second]);

  useEffect(() => {
    const isAlreadySelected = questionState?.userSelection[questionNumber - 1];
    if (isAlreadySelected) setChoice(isAlreadySelected);
  }, [questionNumber, questionState?.userSelection, setChoice]);

  return (
    <>
      <div className="flex space-between align-center mb-1 ">
        <button
          className="btn btn-text text-on-button red"
          onClick={quitFunction}
        >
          Quit
        </button>
      </div>
      <div className="flex space-between  mb-1">
        <span className="subtitle-2 ">
          <span className="text-black-01">Question:</span>
          {questionNumber}/5
        </span>
        <div className="ml-auto mb-1 flex align-center">
          <MdTimer className="md-icons1" />
          <span className="subtitle2 alignself-center ml-1">
          {minutes < 10 ? `0${minutes}` : minutes}:{second < 10 ? `0${second}` : second}
            </span>
        </div>
      </div>
      <p className="body1 text-center mb-2">{questionObj?.question}</p>
      <div className="flex flex-column">
        {questionObj?.options.map((option: string, i: number) => (
          <>
            <input
              type="radio"
              id={`${i}`}
              name="options"
              value={"Dick Grayson"}
              className="display-none"
              onClick={() => setChoice(option)}
            />
            <label
              htmlFor={`${i}`}
              className={
                choice === option
                  ? "btn btn-contained large mb-1"
                  : "btn large mb-1"
              }
            >
              {option}
            </label>
          </>
        ))}
      </div>
    </>
  );
};
