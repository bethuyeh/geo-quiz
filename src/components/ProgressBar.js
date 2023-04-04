import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const ProgressBar = () => {
  const [{ correctAnswersCount, questions }] = useContext(QuizContext);
  const progress = (correctAnswersCount / questions.length) * 100;

  return (
    <div className="progress">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;


