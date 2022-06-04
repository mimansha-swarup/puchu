import "./Rule.css";
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuestions } from '../../Context';

export const RuleBoard:React.FC = () => {
  const {questionDispatch} = useQuestions()
  return (
    <div className="card  shadow rule-card">
      <div className="card-body">
        <div className="card-header">
          <p className="headline2 semibold text-white-00 text-center ">
            Quiz Rules
          </p>
        </div>
        <p className="body2">
          {" "}
          <strong>1.</strong> There will be set of 5 questions and for each
          question there will be 3 options available.
        </p>
        <p className="body2">
          {" "}
          <strong>2.</strong> Each correct answer will credit 10 points to your
          Total score. No negative marking.
        </p>
        <p className="body2">
          {" "}
          <strong>3.</strong> There will be a timer for 5 mins. If you didn't
          choose the answer in the given time it will send you to the next
          question.
        </p>
        <p className="body2">
          {" "}
          <strong>4.</strong> Click on "Quit Quiz" button to quit the quiz
          anytime while you are playing it.
        </p>
        <p className="body2">
          {" "}
          <strong>5.</strong> You can see the Quiz board page containing the
          high score of participants after giving the quiz.
        </p>
      </div>
      <div className="card-action ">
        <button className="btn btn-text red mr-auto">Quit</button>
        <Link to="/quiz"  onClick={()=>questionDispatch({ type: "RESET", payload: {} })} >
        <button className="btn btn-outline ">Continue</button>
        </Link>
      </div>
    </div>
  );
};
