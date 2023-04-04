import React, {useState} from "react";
import Quiz from "../components/Quiz"
import { QuizProvider } from "../contexts/quiz";
import Timer from "../components/Timer";

const EasyPage = () => {
  const [timeOut, setTimeOut] = useState(false);

  return (
    <React.StrictMode>
    <QuizProvider>
    {timeOut ? ( <div className="time-up"><h1>Time up</h1></div>) : (
      <>
      <div className="timer">
    <Timer setTimeOut={setTimeOut}/>
    </div>
      <Quiz setTimeOut={setTimeOut}/>
      </>
    )}
    </QuizProvider>
  </React.StrictMode>
  );
};

export default EasyPage;
