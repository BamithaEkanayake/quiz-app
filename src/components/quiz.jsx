import { useState } from "react";

function Quiz() {
  const questionBank = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which language is used for web apps?",
      options: ["PHP", "Python", "Javascript", "All"],
      answer: "All",
    },
    {
      question: "Who is the current CEO of Tesla?",
      options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Tony Stark"],
      answer: "Elon Musk",
    },
  ];

  const initialAnswers = [null, null, null];
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleSelectOption(option) {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = option;
    setUserAnswers(newUserAnswers);
  }

  function goToPrev() {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  }

  function goToNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  return (
    <div>
      <h1>Question {currentQuestion + 1}</h1>
      <p className="question">{questionBank[currentQuestion].question}</p>
      {questionBank[currentQuestion].options.map((option) => (
        <button className="option" onClick={() => handleSelectOption(option)}>
          {option}
        </button>
      ))}

      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button
          onClick={goToNext}
          disabled={currentQuestion === questionBank.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
