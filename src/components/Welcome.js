import React, { useState } from 'react';
import '../styles.css';

export default function Welcome(props) {
    return (
        <main className="welcome-page">
            <h1 className='title'>Quizzical</h1>
            <p className='description'>Welcome to Quizzical Trivia! Get ready to test your knowledge...</p>
            <button className='start-button' onClick={props.startQuiz}>
                Start Quiz
            </button>  
        </main>
    )
}

 