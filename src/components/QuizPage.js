import React, { useEffect, useState } from 'react';
import '../styles.css';
import { nanoid } from 'nanoid';
import QuizCard from './QuizCard';


export default function QuizPage(props) {
    const [quizState, setQuizState] = useState(getQuizState());
    const [allAnswered, setAllAnswered] = useState(false);
    const [checkAnswers, setCheckAnswers] = useState(false);
    const [numCorrectAnswers, setNumCorrectAnswers] = useState(null);
  //will add check for perfect score to render confetti 
    const [perfectScore, setPerfectScore] = useState(false);
    const [showError, setShowError] = useState(false);

    //helper function to shuffle answers
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); 
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function getQuizState() {
        return (props.quizData.map(question => {
            return ({
                id: question.question,
                incorrectAnswers: question.incorrect_answers,
                correctAnswer: question.correct_answer,
                answers: "",
                selectedAnswer: null
            })
        }))
    }    
    
    //shuffle answers only once
    useEffect(() => {
        setQuizState(() => {
            return (props.quizData.map(question => {
                return ({
                    id: question.question,
                    incorrectAnswers: question.incorrect_answers,
                    correctAnswer: question.correct_answer,
                    answers: shuffle([...question.incorrect_answers, question.correct_answer]),
                    selectedAnswer: null
                })
            }))
        })
    }, []);

    useEffect(() => {
        const answersArray = quizState.filter(question => !question.selectedAnswer )
        if (answersArray.length === 0) {
            setAllAnswered(true);
        } 
    }, [quizState]);
    
    function handleChange(event, id) {
        const { value } = event.target;
        setQuizState(prev => {
            return (prev.map(question => {
                return question.id === id ? {...question, selectedAnswer: value} : question
            }))
        })
    }
    console.log(quizState)
    function handleSubmit(event) {
        event.preventDefault();
        if (allAnswered) {
            const scoreAnswersArray = quizState.filter(question => question.selectedAnswer === question.correctAnswer)
            setNumCorrectAnswers(scoreAnswersArray.length);
            setCheckAnswers(true);
            if (numCorrectAnswers === 5) {
                setPerfectScore(true);
            }
        } else {
            return false;
        }
        
    }

    const quizElements = props.quizData.map(question => (
        <QuizCard 
            key={nanoid()}
            id={question.question}
            question={question.question}
            quizState={quizState}
            checkAnswers={checkAnswers}
            handleChange={handleChange}
            
        />
    ))

    return (
        <main className={props.started ? "quiz-page fade-in" : "quiz-page"}>
            <form onSubmit={checkAnswers ? (event)=>props.newGame(event) : handleSubmit}>
                {quizElements}
                <div className='btn-container'>
                    <button className={allAnswered ? 'button-check' : 'button-check button-check-disabled'}
                            onMouseEnter={() => setShowError(true)}
                            onMouseLeave={() => setShowError(false)}>
                        {checkAnswers ? 'Play Again' : 'Check answers'}
                    </button> 
                    {showError && !allAnswered && <h3 id='error-message' className='message'>Please answer all questions</h3>}
                    {checkAnswers && <h3 className='message'>You scored {numCorrectAnswers}/5 correct answers</h3>}
                </div>
            </form>
        </main>
    )
}
