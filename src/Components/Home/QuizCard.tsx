import React from "react";
import { Link } from "react-router-dom";
import { DocumentData } from 'firebase/firestore';

interface QuizCardProps {
  data: DocumentData |undefined,
}

export const QuizCard: React.FC<QuizCardProps> = ({data}) => {

  return (
    <Link to={"/rule"}>
    <div className="card">
      <div className="media-cont">
        <img
          className="card-media"
          src={data?.coverImage}
          alt={data?.quizName}
        />
      </div>
      <div className="card-body">
        <div className="card-header">
          <p className="headline4 semibold text-white-00 ">
          {data?.quizName}
          </p>
          <p className="card-subtitle subtitle1">{data?.questions.length} questions</p>
        </div>
        <p className="card-text body2 ">Take this quiz to test yourself!</p>
      </div>
    </div>
          </Link>
  );
};
