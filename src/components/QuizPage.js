import React, { useState } from 'react';
import '../styles.css';
import { nanoid } from 'nanoid';
import QuizCard from './QuizCard';


export default function QuizPage(props) {
    const [quizState, setQuizState] = useState(getQuizState());
    

    function getQuizState() {
        return (props.quizData.map(question => {
            return ({
                id: question.question,
                correctAnswer: question.correct_answer,
                selectedAnswer: ""
            })
        }))
    }    
    
    function handleChange(event, id) {
        const { value } = event.target;
        setQuizState(prev => {
            return (prev.map(question => {
                return question.id === id ? {...question, selectedAnswer: value} : question
            }))
        })
    }

    const quizElements = props.quizData.map(question => (
        <QuizCard 
            key={nanoid()}
            id={question.question}
            question={question.question}
            correctAnswer={question.correct_answer}
            incorrectAnswers={question.incorrect_answers}
            quizState={quizState}
            handleChange={handleChange}
        />
    ))

    console.log(quizState)
    return (
        <main className={props.started ? "quiz-page fade-in" : "quiz-page"}>
            <form>
                {quizElements}
                <button className='button-check'>Check answers</button> 
            </form>
        </main>
    )
}
//will need to do conditional rendering for button types