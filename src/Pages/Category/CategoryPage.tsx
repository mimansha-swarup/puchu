import React from "react";
import { QuizCard } from "../../Components";

export const CategoryPage: React.FC = () => {
  return (
    <div className="content">
      <h2 className="headline2 text-center mt-2 mb-3">Pokemon</h2>
      <div className="flex flex-wrap mt-3 gap-3 justify-center">
        <QuizCard/>
        <QuizCard/>

      </div>
    </div>
  );
};
