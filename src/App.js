import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import Welcome from './components/Welcome';
import QuizPage from './components/QuizPage';

export default function App() {
  const [welcome, setWelcome] = useState(true);

  return (
    <div className="App">
      {welcome && <Welcome />}
     
    </div>
  );
}

