import React, { useState } from 'react';
import '../styles.css';


export default function QuizCard(props) {
    return (
        <main className='quiz-card'>
            <fieldset>
                <legend>Question</legend>
                
                <input 
                    type="radio"
                    name="answer1"
                />
                <label htmlFor="answer1">Answer1</label>
                
                <input 
                    type="radio"
                    name="answer2"
                />
                <label htmlFor="answer2">Answer2</label>
                
                <input 
                    type="radio"
                    name="amswer3"
                />
                <label htmlFor="answer3">Answer3</label>
                
                <input 
                    type="radio"
                    name="amswer4"
                />
                <label htmlFor="answer4">Answer4</label>

            </fieldset>
            <hr />
        </main>
    )
}