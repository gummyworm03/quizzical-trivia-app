import React, { useState } from 'react';
import '../styles.css';
import QuizCard from './QuizCard';


export default function QuizPage(props) {
    return (
        <main className={props.started ? "quiz-page fade-in" : "quiz-page"}>
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
        </main>
    )
}