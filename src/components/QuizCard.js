import React, { useState, useEffect } from 'react';
import '../styles.css';


export default function QuizCard(props) {

    function decodeHtml(html) {
        let txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }

    //Get current question and save in variable for readability
    function getCurrentQuestion() {
        const questionIndex = props.quizState.findIndex(question => question.id === props.id);
        return props.quizState[questionIndex];
    }
    const currentQuestion = getCurrentQuestion();
    

    return (
        <main className='quiz-card'>
            <fieldset>
                <legend>{decodeHtml(props.question)}</legend>
                
                <input 
                    type="radio"
                    id={`answer-${currentQuestion.answers[0]}`}
                    name={`answer-${props.id}`}
                    value={currentQuestion.answers[0]}
                    checked={currentQuestion.selectedAnswer === currentQuestion.answers[0]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                />
                <label htmlFor={`answer-${currentQuestion.answers[0]}`}>{decodeHtml(currentQuestion.answers[0])}</label>
                
                <input 
                    type="radio"
                    id={`answer-${currentQuestion.answers[1]}`}
                    name={`answer-${props.id}`}
                    value={currentQuestion.answers[1]}
                    checked={currentQuestion.selectedAnswer === currentQuestion.answers[1]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                    
                />
                <label htmlFor={`answer-${currentQuestion.answers[1]}`}>{decodeHtml(currentQuestion.answers[1])}</label>
                
                <input 
                    type="radio"
                    id={`answer-${currentQuestion.answers[2]}`}
                    name={`answer-${props.id}`}
                    value={currentQuestion.answers[2]}
                    checked={currentQuestion.selectedAnswer === currentQuestion.answers[2]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                />
                <label htmlFor={`answer-${currentQuestion.answers[2]}`}>{decodeHtml(currentQuestion.answers[2])}</label>
                
                <input 
                    type="radio"
                    id={`answer-${currentQuestion.answers[3]}`}
                    name={`answer-${props.id}`}
                    value={currentQuestion.answers[3]}
                    checked={currentQuestion.selectedAnswer === currentQuestion.answers[3]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                />
                <label htmlFor={`answer-${currentQuestion.answers[3]}`}>{decodeHtml(currentQuestion.answers[3])}</label>

            </fieldset>
            <hr />
        </main>
    )
}

