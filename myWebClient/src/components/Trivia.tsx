import "../css/Home.css";
import "../css/SharedStyles.css";
import { useState } from "react";

interface Props {
  trivia: {
    response_code: number;
    results: {
      type: string;
      category: string;
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }[];
  };
  answerArr: {
    id: number;
    response: string;
    correct: number;
    oldCorrect: number;
  }[];
  handleChange: (e: any) => void;
}

const Trivia = ({ trivia, handleChange, answerArr }: Props) => {
  // Function to keep track where the correct answer was placed in the answers array.
  const [randomNumberArr, setRandomNumberArr] = useState([-1, -1, -1, -1, -1]);

  // Create a component of Questions and answers.
  const questionComponent = trivia?.results.map((question, index) => {
    let answers = [...question.incorrect_answers];
    if (randomNumberArr[index] === -1) {
      setRandomNumberArr((oldArr) => {
        let newArr = [...oldArr];
        newArr[index] = Math.floor(
          Math.random() * (question.incorrect_answers.length + 1)
        );
        return newArr;
      });
    }
    answers.splice(randomNumberArr[index], 0, question.correct_answer); // Add the correct answer.
    let loop = index;
    return (
      <div key={index}>
        <br />
        <p>{atob(question.question)}</p>
        {answers.map((answer, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  name={`${loop}`}
                  value={atob(answer)}
                  checked={answerArr[loop].response === atob(answer)}
                  onChange={(e) => handleChange(e)}
                />
                {atob(answer)}
              </label>
              <br />
            </div>
          );
        })}
        {answerArr[index].oldCorrect === 0 && (
          <p className="incorrect">Incorrect</p>
        )}
        {answerArr[index].oldCorrect === 1 && (
          <p className="correct">Correct</p>
        )}
      </div>
    );
  });
  return <>{questionComponent}</>;
};

export default Trivia;
