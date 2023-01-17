import React, { useEffect, useState } from 'react';
import '../styles.css';
import { nanoid } from 'nanoid';
import QuizCard from './QuizCard';
import Question from './Question';
import Answer from './Answer';
//import Confetti from 'react-confetti';
import data from '../data';
import shuffle from '../shuffle';

export default function QuizPage(props) {
    //change to placeholder data for now to avoid empty array bug 
    const [quizState, setQuizState] = useState(getQuizState(data.results));
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [allAnswered, setAllAnswered] = useState(false);
    const [checkAnswers, setCheckAnswers] = useState(false);
    const [numCorrectAnswers, setNumCorrectAnswers] = useState(null);
    const [showErrorMsg, setShowErrorMsg] = useState(false);
    //Consider refactoring and combining state since these are all related
    // const [answeredState, setAnsweredState] = useState({
    //     allAnswered: false,
    //     scoreAnswers: false,
    //     numCorrectAnswers: null,
    //     perfectScore: false
    // });
    /*Time to think about state. This is what will change based on user input:
        1. The selected answer of each question
        2. The button will only be active once all questions are answered.
        3. The number of correct answers once submitted.
    */
    console.log(quizState);

    useEffect(() => fetchRawData(), []);

    function getQuizState(rawDataArray) {
        return (rawDataArray.map(question => {
            return ({
                id: question.question,
                question: question.question,
                incorrectAnswers: question.incorrect_answers,
                correctAnswer: question.correct_answer,
                answers: shuffle([...question.incorrect_answers, question.correct_answer]),
                selectedAnswer: ""
            })
        }))
    }    

    function fetchRawData() {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                      `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((rawData) => {
                setQuizState(getQuizState(rawData.results));
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setQuizState(null);
            })
            .finally(() => setIsLoading(false));
    };
    //bug because initial state is empty array so this stays true
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
    };
  
    function handleSubmit(event) {
        event.preventDefault();
        if (allAnswered) {
            const scoreAnswersArray = quizState.filter(question => question.selectedAnswer === question.correctAnswer)
            setNumCorrectAnswers(scoreAnswersArray.length);
            setCheckAnswers(true);
            // if (scoreAnswersArray.length === 5) {
            //     props.setPerfectScore(true);
            // }
        } else {
            return false;
        }
    }
    
    const quizElements = quizState.map(question => (
        <QuizCard key={nanoid()}>
            <Question question={question.question}/>
            <Answer answer={question.answers[0]} 
                    id={question.id} 
                    selectedAnswer={question.selectedAnswer}
                    correctAnswer={question.correctAnswer}
                    handleChange={handleChange}
                    checkAnswers={checkAnswers}/>
            <Answer answer={question.answers[1]} 
                    id={question.id} 
                    selectedAnswer={question.selectedAnswer}
                    correctAnswer={question.correctAnswer}
                    handleChange={handleChange}
                    checkAnswers={checkAnswers}/>
            <Answer answer={question.answers[2]} 
                    id={question.id} 
                    selectedAnswer={question.selectedAnswer}
                    correctAnswer={question.correctAnswer}
                    handleChange={handleChange}
                    checkAnswers={checkAnswers}/>
            <Answer answer={question.answers[3]} 
                    id={question.id} 
                    selectedAnswer={question.selectedAnswer}
                    correctAnswer={question.correctAnswer}
                    handleChange={handleChange}
                    checkAnswers={checkAnswers}/>
        </QuizCard>
    ));
    

    return (
        <>
        <main className= "quiz-page">
            {isLoading && <div className='loading-page'>Loading...</div>}
            {!isLoading &&<form onSubmit={checkAnswers ? (event)=>props.newGame(event) : handleSubmit}>
                {quizElements}
                <div className='btn-container'>
                    <button className={allAnswered ? 'button-check' : 'button-check button-check-disabled'}
                            onMouseEnter={() => setShowErrorMsg(true)}
                            onMouseLeave={() => setShowErrorMsg(false)}>
                        {checkAnswers ? 'Play Again' : 'Check answers'}
                    </button> 
                    {showErrorMsg && !allAnswered && <h3 id='error-message' className='message'>Please answer all questions</h3>}
                    {checkAnswers && <h3 className='message'>You scored {numCorrectAnswers}/5 correct answers</h3>}
                </div>
            </form>}
        </main>
        </>
    )
}




// //Apply conditional styling after scoring answers
// function getAnswerClass() {
//     if (props.checkAnswers) {
//         if (answer === correctAnswer) {
//             return ({
//                 backgroundColor: '#94D7A2',
//                 borderColor: '#94D7A2'
//             })
//         } else if (answer === selectedAnswer) {
//             return ({
//                 backgroundColor: '#F8BCBC',
//                 borderColor: '#F8BCBC',
//                 opacity: 0.5
//             })
//         } else {
//             return ({
//                 color: '#4D5B9E',
//                 borderColor: '#4D5B9E',
//                 opacity: 0.5
//             })
//         }
//     } else {
//         return {}
//     }
// }