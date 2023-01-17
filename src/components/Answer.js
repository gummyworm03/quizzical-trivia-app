import decodeHtml from '../decodeHtml';

export default function Answer({ answer, id, selectedAnswer, handleChange }) {
    return (
        <>
           <input 
                type="radio"
                id={`answer-${answer}`}
                name={`answer-${id}`}
                value={answer}
                checked={selectedAnswer === answer}
                onChange={(event)=>handleChange(event,id)}
                />
            <label htmlFor={`answer-${answer}`}>
                {decodeHtml(answer)}
            </label>
        </>
    )
}

{/*             <input 
                    type="radio"
                    id={`answer-${currentQuestion.answers[0]}`}
                    name={`answer-${props.id}`}
                    value={currentQuestion.answers[0]}
                    checked={currentQuestion.selectedAnswer === currentQuestion.answers[0]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                />
                <label htmlFor={`answer-${currentQuestion.answers[0]}`}
                        style={getAnswerClass(0)}>
                    {decodeHtml(currentQuestion.answers[0])}
                </label> */}