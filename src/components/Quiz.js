import { useContext, useState } from "react";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import { QuizContext } from "../contexts/quiz";
import useSound from "use-sound";
import rightSound from "../Music/right.mp3";
import wrongSound from "../Music/wrong.mp3";

const Quiz = (setTimeOut) => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [playRight] = useSound(rightSound);
  const [playWrong] = useSound(wrongSound);

  const delay = (duration, callback, ...args) => {
    setTimeout(() => {
      callback.apply(null, args);
    }, duration);
  };
  

  const handleSkipQuestion = () => {
    const skippedQuestionIndex = quizState.currentQuestionIndex;
    setSkippedQuestions([...skippedQuestions, skippedQuestionIndex]);
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestart = () => {
    setSkippedQuestions([]);
    dispatch({ type: "RESTART" });
  };

  const handleSelectAnswer = (answer) => {
    delay(5000, () => {
      if (answer === quizState.questions[quizState.currentQuestionIndex].correctAnswer) {
        delay(1000, () => {
          playRight();
          dispatch({ type: "SELECT_ANSWER", payload: answer });
          dispatch({ type: "NEXT_QUESTION" });
          dispatch({ type: "DISPLAY_QUESTION" });
        });
      } else {
        playWrong();
        dispatch({ type: "SELECT_ANSWER", payload: answer });
        delay(1000, () => {
          setTimeout(true);
        });
      }
    });
  };
  
  

  const skippedQuestionsRemaining = skippedQuestions.length > 0;

  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">All done</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of &nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div onClick={handleRestart} className="next-button">
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <ProgressBar />
          
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question onSelectAnswer={handleSelectAnswer} />
          <div className="buttons">
            {skippedQuestionsRemaining && (
              <div
                onClick={() => {
                  const nextQuestionIndex = skippedQuestions.shift();
                  dispatch({
                    type: "GO_TO_QUESTION",
                    payload: nextQuestionIndex,
                  });
                  setSkippedQuestions([...skippedQuestions]);
                }}
                className="next-button"
              >
                Answer skipped questions
              </div>
            )}
            {quizState.currentAnswer && (
              <div onClick={() => dispatch({ type: "NEXT_QUESTION" })} className="next-button">
                Next question
              </div>
            )}
            {!quizState.currentAnswer && (
              <div onClick={handleSkipQuestion} className="next-button">
                Skip question
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
