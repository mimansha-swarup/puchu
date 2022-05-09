import { CategoryPage, HomePage,QuizPage,RulePage } from "../Pages";
import { Route, Routes } from "react-router-dom";

import React from 'react';

export const AllRoutes:React.FC = () =>{
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/rule" element={<RulePage />} />
      <Route path="/category" element={<CategoryPage />} />

    </Routes>
  )
}

