import { useAuth, useQuestions } from "../../Context";
import { useEffect, useState } from "react";
import { updateUserDb } from "../../Utils";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const ResultPage = () => {
  const { questionState, questionDispatch } = useQuestions();
  const { user } = useAuth();

  const localQuestion = questionState?.questions.slice(
    0,
    questionState?.questions.length
  );

  const [updateScore, setUpdateScore] = useState(false);

  useEffect(() => {
    localQuestion.forEach((question, index) => {
      if (question["correctAnswer"] === questionState?.userSelection[index]) {
        questionDispatch({
          type: "UPDATE_SCORE",
          payload: 5,
        });
      }
    });
    setUpdateScore(true);
  }, []);
  useEffect(() => {
    (async () => {
      if (updateScore) {
        if (user) {
          let currentUserRef = doc(db, `User/${user.uid}`);
          const userSnapData = await (await getDoc(currentUserRef)).data();

          if (userSnapData?.score < questionState?.score)
            updateUserDb(user, {
              score: questionState?.score,
            });
        }
      }
    })();
  }, [updateScore]);

  return (
    <div className="content">
      <h2 className="headline2 text-center mt-2 mb-2">Result</h2>
      <h3 className="headline3 text-center mt-2 mb-2">
        Your score {questionState?.score}
      </h3>
      <div className="mr-2 ml-2">
        {localQuestion.map(({ question, options, correctAnswer }, index) => {
          const localOptions: [] = options;
          return (
            <div className="mt-2 mb-2" key={index}>
              <span className="subtitle-2 ml-3">
                <span className="text-black-01">Question:</span> {index + 1}
              </span>
              <p className="body1 text-center mb-2">{question}</p>
              <div className="result-container">
                {localOptions.map((option) => {
                  return (
                    <div
                      className={
                        questionState?.userSelection[index] === option
                          ? correctAnswer === option
                            ? "btn btn-contained mb-1"
                            : "btn  btn-contained red mb-1"
                          : correctAnswer === option
                          ? "btn btn-contained mb-1 "
                          : "btn mb-1"
                      }
                    >
                      {option}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex">
        <button className="btn btn-contained  mt-1  mb-3 mx-auto  purple">
          Take Another Quiz
        </button>
      </div>
    </div>
  );
};
