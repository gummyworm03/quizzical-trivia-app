import React, { useState } from 'react';
import '../styles.css';
import { nanoid } from 'nanoid';
import QuizCard from './QuizCard';


export default function QuizPage(props) {
    const quizElements = props.quizData.map(question => (
        <QuizCard 
            key={nanoid()}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
        />
    ))
    return (
        <main className={props.started ? "quiz-page fade-in" : "quiz-page"}>
            {quizElements}
        </main>
    )
}