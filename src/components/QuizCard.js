import React, { useState } from 'react';
import '../styles.css';


export default function QuizCard(props) {
    //trying to combine all answers into single array, then shuffle them
    let answers = [...props.incorrectAnswers, props.correctAnswer];
    
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
    shuffle(answers);
    console.log(answers);
    
    function decodeHtml(html) {
        let txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    }

    return (
        <main className='quiz-card'>
            <fieldset>
                <legend>{decodeHtml(props.question)}</legend>
                
                <input 
                    type="radio"
                    name="answer1"
                />
                <label htmlFor="answer1">{decodeHtml(answers[0])}</label>
                
                <input 
                    type="radio"
                    name="answer2"
                />
                <label htmlFor="answer2">{decodeHtml(answers[1])}</label>
                
                <input 
                    type="radio"
                    name="amswer3"
                />
                <label htmlFor="answer3">{decodeHtml(answers[2])}</label>
                
                <input 
                    type="radio"
                    name="amswer4"
                />
                <label htmlFor="answer4">{decodeHtml(answers[3])}</label>

            </fieldset>
            <hr />
        </main>
    )
}