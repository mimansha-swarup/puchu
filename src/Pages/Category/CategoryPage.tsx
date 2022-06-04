import React from "react";
import { Link, useParams } from "react-router-dom";
import { QuizCard } from "../../Components";
import { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { useQuestions, useCategory } from "../../Context";

export const CategoryPage: React.FC = () => {
  const { categoryName } = useParams();

  const [quizzesList, setQuizzesList] = useState<any[]>([]);
  const { categoryState, categoryDispatch } = useCategory();
  const { questionDispatch } = useQuestions();
  const { categories, quizzes } = categoryState;
  const currCategory = categories[categoryName as keyof typeof categories];

  useEffect(() => {
    (async () => {
      setQuizzesList([]);
      currCategory?.quizzes.map(async (quizId: string) => {
        if (quizzes[quizId]) {
          setQuizzesList((prev) => [...prev, quizzes[quizId]]);
        } else {
          const quizDoc = await getDoc(doc(db, `/Quizzes/${quizId}`));
          categoryDispatch({
            type: "SET_QUIZ",
            payload: { id: quizDoc.id, data: quizDoc.data() },
          });
          setQuizzesList((prev) => [...prev, quizDoc.data()]);
        }
      });
    })();
  }, [
    categoryName,
    categories,
    currCategory?.quizzes,
    quizzes,
    categoryDispatch,
  ]);

  return (
    <div className="content">
      <h2 className="headline2 text-center mt-2 mb-3">{currCategory?.name}</h2>
      <div className="flex flex-wrap mt-3 gap-3 justify-center">
        {quizzesList.map((quiz) => (
          <Link
            to="/rule"
            key={quiz.quizName}
            onClick={() =>
              questionDispatch({
                type: "SET_QUESTIONS",
                payload: quiz?.questions,
              })
            }
          >
            <QuizCard data={quiz} />
          </Link>
        ))}
      </div>
    </div>
  );
};
