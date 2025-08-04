function Results({ userAnswers, questionBank }) {
  function getScore() {
    let finalScore = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });

    return finalScore;
  }
  const score = getScore();

  function restartQuiz() {
    return window.location.reload();
  }

  return (
    <div className="results">
      <h2>Quiz Completed!</h2>
      <p>
        Your Result is: {score}/{questionBank.length}
      </p>
      <button className="restart-button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Results;
