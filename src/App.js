import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import Welcome from './components/Welcome';
import QuizPage from './components/QuizPage';

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="App">
      <Welcome />
      {started &&<QuizPage />}
    </div>
  );
}

