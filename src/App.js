import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import QuizPage from './components/QuizPage';


export default function App() {
  const [started, setStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [playAgain, setPlayAgain] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  function startQuiz() {
    setStarted(true);
  }

  function newGame(event) {
    event.preventDefault();
    console.log('Play Again')
    setIsFetched(false);
    setPlayAgain(prev => prev + 1);
  }

  useEffect(() => {
    async function getQuizData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
      const data = await res.json();
      setQuizData(data.results);
      setIsFetched(true);
    }
    getQuizData();
  }, [playAgain])

  return (
    <div className="App">
      <div className='loading-page'>Loading...</div>
      {!started && <Welcome startQuiz={startQuiz}/>}
      {started && isFetched && <QuizPage started={started}
                quizData={quizData}
                newGame={newGame}/>}
    </div>
  );
}
