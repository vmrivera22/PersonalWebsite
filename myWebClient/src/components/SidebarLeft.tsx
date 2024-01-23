import "../css/Header.css";
import { useEffect, useRef, useState } from "react";
import { getTrivia } from "../utils/api";
import { useLoaderData } from "react-router-dom";
import Confetti from "react-confetti";
import GetWindow from "./GetWindow";

const Sidebar = () => {
  const window = GetWindow();
  const [answerArr, setAnswerArr] = useState([
    { id: 1, response: "", correct: -1 },
    { id: 2, response: "", correct: -1 },
    { id: 3, response: "", correct: -1 },
    { id: 4, response: "", correct: -1 },
    { id: 5, response: "", correct: -1 },
  ]);
  const [correct, setCorrect] = useState(false);

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

  const handleChange = (event: any) => {
    const { value, id } = event.target;
    setAnswerArr((prevResponse) => {
      let newArr = [...prevResponse];
      newArr[id].response = value;
      return newArr;
    });
  };
  const [randomNumberArr, setRandomNumberArr] = useState([-1, -1, -1, -1, -1]);

  const questionComponent = trivia?.results.map((question, index) => {
    let answers = [...question.incorrect_answers];
    if (randomNumberArr[index] === -1) {
      setRandomNumberArr((oldArr) => {
        let newArr = [...oldArr];
        newArr[index] = Math.floor(
          Math.random() * question.incorrect_answers.length + 1
        );
        return newArr;
      });
    }
    answers.splice(randomNumberArr[index], 0, question.correct_answer);
    return (
      <>
        <br />
        <p>{atob(question.question)}</p>
        {answers.map((answer) => {
          console.log(index);
          return (
            <>
              <label className="radio--label">
                <input
                  type="radio"
                  id={`${index}`}
                  name={`response${index}`}
                  value={atob(answer)}
                  checked={answerArr[index].response === atob(answer)}
                  onChange={handleChange}
                />
                {atob(answer)}
              </label>
              <br />
            </>
          );
        })}
        {answerArr[index].correct === 0 && (
          <p className="incorrect">Incorrect</p>
        )}
        {answerArr[index].correct === 1 && <p className="correct">Correct</p>}
      </>
    );
  });

  const handleSubmit = (event: any) => {
    event?.preventDefault();
    setCorrect(true);
    for (let i = 0; i < answerArr.length; i++) {
      if (answerArr[i].response === atob(trivia?.results[i].correct_answer)) {
        setAnswerArr((oldAnswers) => {
          let newAnswers = [...oldAnswers];
          newAnswers[i].correct = 1;
          return newAnswers;
        });
      } else {
        setAnswerArr((oldAnswers) => {
          let newAnswers = [...oldAnswers];
          newAnswers[i].correct = 0;
          setCorrect(false);
          return newAnswers;
        });
      }
    }
  };

  return (
    <div className="sidebar--left--container">
      {correct && (
        <Confetti
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
          width={window.windowWidth * 0.2}
          height={window.windowHeight * 2}
          numberOfPieces={200}
          confettiSource={{ x: 0, y: 70, w: window.windowWidth * 0.2, h: 0 }}
        />
      )}
      <h2>Trivia</h2>
      <form className="form--container" onSubmit={handleSubmit}>
        {questionComponent} <button className="submit--button">Submit</button>
      </form>
    </div>
  );
};

export async function triviaLoader() {
  return getTrivia();
}

export default Sidebar;
