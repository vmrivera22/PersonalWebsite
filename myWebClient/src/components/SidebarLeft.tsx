import "../css/Home.css";
import { useEffect, useState } from "react";
import { getTrivia } from "../utils/api";
import { useLoaderData } from "react-router-dom";
import Confetti from "react-confetti";
import GetWindow from "./GetWindow";
import Trivia from "./Trivia";

// Component for the left sidebar (Trivia Questions).
const Sidebar = () => {
  const windowDimensions = GetWindow();
  // State to keep track of the user responses.
  const [answerArr, setAnswerArr] = useState([
    { id: 1, response: "", correct: -1, oldCorrect: -1 },
    { id: 2, response: "", correct: -1, oldCorrect: -1 },
    { id: 3, response: "", correct: -1, oldCorrect: -1 },
    { id: 4, response: "", correct: -1, oldCorrect: -1 },
    { id: 5, response: "", correct: -1, oldCorrect: -1 },
  ]);

  // State set to true if all answers submitted are true.
  const [correct, setCorrect] = useState(false);

  // Load data from the fetched loader function.
  const trivia = useLoaderData() as {
    response_code: number;
    results: {
      type: string;
      category: string;
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }[];
  };

  // Change the user response array (answerArr)
  const handleChange = (event: any) => {
    const { value, name } = event.target;
    setAnswerArr((prevResponse) => {
      let newArr = [...prevResponse];
      newArr[name].response = value;
      if (value === atob(trivia.results[name].correct_answer)) {
        newArr[name].correct = 1;
      } else {
        newArr[name].correct = 0;
      }
      return newArr;
    });
  };

  // Function that triggers once the form is submitted.
  const handleSubmit = (event: any) => {
    event?.preventDefault();
    if (answerArr.every((ans) => ans.correct === 1)) {
      setCorrect(true);
    }
    answerArr.forEach((ans, index) => {
      setAnswerArr((oldArr) => {
        let newArr = [...oldArr];
        newArr[index].oldCorrect = ans.correct;
        return newArr;
      });
    });
  };

  useEffect(() => {
    if (correct) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [correct]);

  return (
    <div
      id="sidebar--l"
      className={
        windowDimensions.windowWidth >= 500
          ? "sidebar--left--container fullsize--sidebar--r"
          : "sidebar--left--container"
      }
    >
      {correct && (
        <Confetti
          width={
            windowDimensions.windowWidth >= 550
              ? windowDimensions.windowWidth * 0.2
              : windowDimensions.windowWidth * 0.8
          }
          height={windowDimensions.windowHeight * 2}
          numberOfPieces={200}
          confettiSource={
            windowDimensions.windowWidth >= 550
              ? { x: 0, y: 70, w: windowDimensions.windowWidth * 0.2, h: 0 }
              : { x: 0, y: 70, w: windowDimensions.windowWidth, h: 0 }
          }
          recycle={true}
          run={true}
        />
      )}
      {windowDimensions.windowWidth <= 500 && <div className="line--break" />}
      <h2>Trivia</h2>
      <form onSubmit={handleSubmit}>
        <Trivia
          trivia={trivia}
          answerArr={answerArr}
          handleChange={handleChange}
        />{" "}
        <button className="submit--button grey--bg black">Submit</button>
      </form>
    </div>
  );
};

export async function triviaLoader() {
  return getTrivia();
}

export default Sidebar;
