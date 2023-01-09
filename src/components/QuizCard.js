import React, { useState } from 'react';
import '../styles.css';


export default function QuizCard(props) {
    //trying to combine all answers into single array, then shuffle them
    let answers = [];
    answers.push(props.incorrectAnswers, props.correctAnswer);
    console.log(answers)
    return (
        <main className='quiz-card'>
            <fieldset>
                <legend>{props.question}</legend>
                
                <input 
                    type="radio"
                    name="answer1"
                />
                <label htmlFor="answer1"></label>
                
                <input 
                    type="radio"
                    name="answer2"
                />
                <label htmlFor="answer2"></label>
                
                <input 
                    type="radio"
                    name="amswer3"
                />
                <label htmlFor="answer3"></label>
                
                <input 
                    type="radio"
                    name="amswer4"
                />
                <label htmlFor="answer4"></label>

            </fieldset>
            <hr />
        </main>
    )
}