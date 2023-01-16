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
    const [quizData, setQuizData] = useState(getQuizData());
    const [allAnswered, setAllAnswered] = useState(false);
    const [checkAnswers, setCheckAnswers] = useState(false);
    const [numCorrectAnswers, setNumCorrectAnswers] = useState(null);
    const [showError, setShowError] = useState(false);

    
    
    function getQuizData() {
        return (data.results.map(question => {
            return ({
                id: question.question,
                question: question.question,
                incorrectAnswers: question.incorrect_answers,
                correctAnswer: question.correct_answer,
                answers: shuffle([...question.incorrect_answers, question.correct_answer]),
            })
        }))
    }    

    // useEffect(() => {
    //     const answersArray = quizState.filter(question => !question.selectedAnswer )
    //     if (answersArray.length === 0) {
    //         setAllAnswered(true);
    //     } 
    // }, [quizState]);
    
    // function handleChange(event, id) {
    //     const { value } = event.target;
    //     setQuizState(prev => {
    //         return (prev.map(question => {
    //             return question.id === id ? {...question, selectedAnswer: value} : question
    //         }))
    //     })
    // }
  
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     if (allAnswered) {
    //         const scoreAnswersArray = quizState.filter(question => question.selectedAnswer === question.correctAnswer)
    //         setNumCorrectAnswers(scoreAnswersArray.length);
    //         setCheckAnswers(true);
    //         if (numCorrectAnswers === 5) {
    //             props.setPerfectScore(true);
    //         }
    //     } else {
    //         return false;
    //     }
        
    // }

    // const quizElements = props.quizData.map(question => (
    //     <QuizCard 
    //         key={nanoid()}
    //         id={question.question}
    //         question={question.question}
    //         quizState={quizState}
    //         checkAnswers={checkAnswers}
    //         handleChange={handleChange}
            
    //     />
    // ))

    
    const quizElements = quizData.map(question => (
        <QuizCard key={nanoid()}>
            <Question question={question.question}/>
            <Answer answer={question.answers[0]} id={question.id}/>
            <Answer answer={question.answers[1]} id={question.id}/>
            <Answer answer={question.answers[2]} id={question.id}/>
            <Answer answer={question.answers[3]} id={question.id}/>
        </QuizCard>
    ));

    return (
        <>
        <main className= "quiz-page">
            <form>
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
        </>
    )
}

{/* <main className= "quiz-page">
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
</main> */}

// //Get current question and save in variable for readability
// function getCurrentQuestion() {
//     const questionIndex = props.quizState.findIndex(question => question.id === props.id);
//     return props.quizState[questionIndex];
// }
// const currentQuestion = getCurrentQuestion();


// //Apply conditional styling after scoring answers
// function getAnswerClass(index) {
//     if (props.checkAnswers) {
//         if (currentQuestion.answers[index] === currentQuestion.correctAnswer) {
//             return ({
//                 backgroundColor: '#94D7A2',
//                 borderColor: '#94D7A2'
//             })
//         } else if (currentQuestion.selectedAnswer === currentQuestion.answers[index]) {
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