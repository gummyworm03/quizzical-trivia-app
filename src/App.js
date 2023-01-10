import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import QuizPage from './components/QuizPage';

export default function App() {
  const [started, setStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);

  function startQuiz() {
    setStarted(true);
  }

  useEffect(() => {
    async function getQuizData() {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
      const data = await res.json();
      setQuizData(data.results);
  }
  getQuizData();
  
  }, [])

  return (
    <div className="App">
      <Welcome startQuiz={startQuiz}/>
      {started &&<QuizPage started={started} quizData={quizData}/>}
    </div>
  );
}


