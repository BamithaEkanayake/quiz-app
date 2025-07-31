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

  var optionSelected = "None";

  function handleSelectOption(option) {
    optionSelected = option;
  }

  return (
    <div>
      <h1>Question 1</h1>
      <p>{questionBank[0].question}</p>
      {questionBank[0].options.map((option) => (
        <button className="option" onClick={() => handleSelectOption(option)}>
          {option}
        </button>
      ))}

      <p>Option Selected = {optionSelected}</p>

      <div className="nav-buttons">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default Quiz;
