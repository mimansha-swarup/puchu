import React from "react";
import { Link } from "react-router-dom";
export const QuizCard: React.FC = () => {
  return (
    <Link to={"/rule"}>
    <div className="card">
      <div className="media-cont">
        <img
          className="card-media"
          src="https://wallpapercave.com/wp/LdDnYdd.jpg"
          alt="pokemon"
        />
      </div>
      <div className="card-body">
        <div className="card-header">
          <p className="headline4 semibold text-white-00 ">
            Gotcha know em all
          </p>
          <p className="card-subtitle subtitle1">5 questions</p>
        </div>
        <p className="card-text body2 ">Take this quiz to test yourself!</p>
      </div>
    </div>
          </Link>
  );
};
