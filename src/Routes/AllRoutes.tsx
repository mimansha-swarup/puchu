import React from "react";
import {
  CategoryPage,
  HomePage,
  LoginPage,
  QuizPage,
  RulePage,
  SignupPage,
} from "../Pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../Context";
import { RequiresAuth } from "./RequireAuth";

export const AllRoutes: React.FC = () => {
  const { authState } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<RequiresAuth />}>
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/rule" element={<RulePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Route>
      {authState?.isAuth ? (
        <>
          <Route path="/login" element={<Navigate replace to="/" />}></Route>
          <Route path="/signin" element={<Navigate replace to="/" />}></Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignupPage />} />
        </>
      )}
    </Routes>
  );
};
