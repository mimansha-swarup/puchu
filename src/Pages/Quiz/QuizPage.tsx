import "./QuizPage.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import React, { useState } from "react";
import { useQuestions } from "../../Context/questionContext";
import { QuizQuestionCard } from "../../Components";
import { useNavigate } from "react-router-dom";


export const QuizPage: React.FC = () => {
  const { questionDispatch, questionState } = useQuestions();

  const localQuestion = questionState?.questions.slice(
    0,
    questionState?.questions.length
  ); //making pure array

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [choice, setChoice] = useState("");

  const navigate = useNavigate();



  const handleUserChoice = () => {
    questionDispatch({
      type: "UPDATE_USERCHOICE",
      payload: { ...questionState?.userSelection, [currentQuestion]: choice },
    });
    setChoice("");
    if (currentQuestion < 4) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };
  const navigateBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const finishGame = () => {
    handleUserChoice();
   
    navigate("/result");
  };

  return (
    <div className="content quiz-container">
      {
        <QuizQuestionCard
          choice={choice}
          setChoice={setChoice}
          questionObj={localQuestion[currentQuestion]}
          questionNumber={currentQuestion + 1}
          finishGame={finishGame}
        />
      }

      <div className="flex space-between max-width mt-1">
        <MdNavigateBefore className="md-icons" onClick={navigateBack} />
        {currentQuestion === 4 ? (
          <button className="btn btn-contained" onClick={finishGame}>
            Finish
          </button>
        ) : (
          <MdNavigateNext className="md-icons" onClick={handleUserChoice} />
        )}
      </div>
    </div>
  );
};
