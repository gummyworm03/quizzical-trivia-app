import React, { useState, useEffect } from 'react';
import '../styles.css';


export default function QuizCard(props) {
    //make sure to change answers to quizAnswers, so answers can be used in App state
    let answers = [...props.incorrectAnswers, props.correctAnswer];
    
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
    
    useEffect(() =>shuffle(answers), []);
    
    function decodeHtml(html) {
        let txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }
//checked={props.quizState[0].selectedAnswer === answers[0]}
    return (
        <main className='quiz-card'>
            <fieldset>
                <legend>{decodeHtml(props.question)}</legend>
                
                <input 
                    type="radio"
                    id={`answer-${answers[0]}`}
                    name={`answer-${props.id}`}
                    value={answers[0]}
                    checked={props.quizState[0].selectedAnswer === answers[0]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                />
                <label htmlFor={`answer-${answers[0]}`}>{decodeHtml(answers[0])}</label>
                
                <input 
                    type="radio"
                    id={`answer-${answers[1]}`}
                    name={`answer-${props.id}`}
                    value={answers[1]}
                    checked={props.quizState[1].selectedAnswer === answers[1]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                />
                <label htmlFor={`answer-${answers[1]}`}>{decodeHtml(answers[1])}</label>
                
                <input 
                    type="radio"
                    id={`answer-${answers[2]}`}
                    name={`answer-${props.id}`}
                    value={answers[2]}
                    checked={props.quizState[2].selectedAnswer === answers[2]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                />
                <label htmlFor={`answer-${answers[2]}`}>{decodeHtml(answers[2])}</label>
                
                <input 
                    type="radio"
                    id={`answer-${answers[3]}`}
                    name={`answer-${props.id}`}
                    value={answers[3]}
                    checked={props.quizState[3].selectedAnswer === answers[3]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                />
                <label htmlFor={`answer-${answers[3]}`}>{decodeHtml(answers[3])}</label>

            </fieldset>
            <hr />
        </main>
    )
}