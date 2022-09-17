import React, { useState } from "react";
import "./Blocks.css";

function Blocks() {
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

  const onButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="blocks">
      {showScore ? (
        /* score card */
        <div className="score">
          <h1>Final Score</h1>
          <p>
            Your Score is {score} out of {questions.length}
          </p>
          <button className="restart--button" onClick={() => restartQuiz()}>
            Restart Quiz
          </button>
        </div> /*score card ends */
      ) : (
        /* question card */
        <div className="inner--block">
          <div className="questions">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
            <p>{questions[currentQuestion].text}</p>
          </div>
          <div className="answers">
            <button
              className="answer_button"
              onClick={() => {
                onButtonClick(questions[currentQuestion].options[0].isCorrect);
              }}
            >
              {questions[currentQuestion].options[0].text}
            </button>
            <button
              className="answer_button"
              onClick={() => {
                onButtonClick(questions[currentQuestion].options[1].isCorrect);
              }}
            >
              {questions[currentQuestion].options[1].text}
            </button>
            <button
              className="answer_button"
              onClick={() => {
                onButtonClick(questions[currentQuestion].options[2].isCorrect);
              }}
            >
              {questions[currentQuestion].options[2].text}
            </button>
            <button
              className="answer_button"
              onClick={() => {
                onButtonClick(questions[currentQuestion].options[3].isCorrect);
              }}
            >
              {questions[currentQuestion].options[3].text}
            </button>
          </div>
        </div> /*question card ends */
      )}
    </div>
  );
}

export default Blocks;
