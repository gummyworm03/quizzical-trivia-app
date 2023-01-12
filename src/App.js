import React, { useState, useEffect } from 'react';
import Welcome from './components/Welcome';
import QuizPage from './components/QuizPage';

export default function App() {
  const [started, setStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  

  function startQuiz() {
    setStarted(true);
  }

  function newGame(event) {
    event.preventDefault();
    console.log('Play Again')
    setIsFetched(false);
    setPlayAgain(true);
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

  //console.log(quizData)
    
    //when setting newgame:
    // quizstate needs to reset
    // allAnswered > false
    //checkAnswers > false
    //numCorrectAnswers > null
    //!perfectScore ? do nothing : setPerfectScore(true)


    
  return (
    <div className="App">
      <Welcome startQuiz={startQuiz}/>
      {started && isFetched &&<QuizPage 
                    started={started} 
                    quizData={quizData}
                    playAgain={playAgain}
                    newGame={newGame}/>}
    </div>
  );
}
