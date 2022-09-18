import React, { useState } from "react";
import "./Blocks.css";

function Blocks() {
  const [showScore, setShowScore] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    {
      text: "How many strings does a full-sized concert pedal harp have?",
      options: [
        { id: 0, text: "127 strings", isCorrect: false },
        { id: 1, text: "57 strings", isCorrect: false },
        { id: 2, text: "97 strings", isCorrect: false },
        { id: 3, text: "47 strings", isCorrect: true },
      ],
    },
    {
      text: "The notes also depends upon",
      options: [
        { id: 0, text: "Diameter of drum", isCorrect: true },
        { id: 1, text: "Thickness of String", isCorrect: false },
        { id: 2, text: "Tension of string", isCorrect: false },
        { id: 3, text: "Wind holes", isCorrect: false },
      ],
    },
    {
      text: "On a six-string guitar with standard tuning, what note sounded by the top and bottom strings when played open?",
      options: [
        { id: 0, text: "E", isCorrect: true },
        { id: 1, text: "C", isCorrect: false },
        { id: 2, text: "D", isCorrect: false },
        { id: 3, text: "F", isCorrect: false },
      ],
    },
    {
      text: "The caliber of instrument depends upon",
      options: [
        { id: 0, text: "Depth of drum", isCorrect: true },
        { id: 1, text: "String length", isCorrect: false },
        { id: 2, text: "Length of wind holes", isCorrect: false },
        { id: 3, text: "Radius of wind holes", isCorrect: false },
      ],
    },
    {
      text: "The electric guitar is a:",
      options: [
        { id: 0, text: "Brass Instrument", isCorrect: false },
        { id: 1, text: "Percussion Instrument", isCorrect: false },
        { id: 2, text: "Electric Instrument", isCorrect: true },
        { id: 3, text: "Woodwind Instrument", isCorrect: false },
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
