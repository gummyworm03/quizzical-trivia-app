import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import QuizPage from './components/QuizPage';


export default function App() {
  const [started, setStarted] = useState(false);

  function startQuiz() {
    setStarted(true);
  }

  return (
    <div className="App">
      {/* <div className='loading-page'>Loading...</div>
      <Welcome started={started} startQuiz={startQuiz}/> */}
      <QuizPage started={started}/>
    </div>
  );
}
