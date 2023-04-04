import React, {useState, useEffect} from "react";
import Quiz from "../components/Quiz"
import { QuizProvider } from "../contexts/quiz";

const Timer = ({ setTimeOut, questionNumber }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setTimeOut(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeOut]);

  useEffect(() => {
    setTimer(40);
  }, [questionNumber]);
  return timer;
}




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
