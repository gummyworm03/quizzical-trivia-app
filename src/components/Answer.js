import decodeHtml from '../decodeHtml';
//might want to spread in props instead
export default function Answer({ answer, id, selectedAnswer, handleChange, checkAnswers, correctAnswer }) {

    //Apply conditional styling after scoring answers
    function getAnswerClass() {
        if (checkAnswers) {
            if (answer === correctAnswer) {
                return ({
                    backgroundColor: '#94D7A2',
                    borderColor: '#94D7A2'
                })
            } else if (answer === selectedAnswer) {
                return ({
                    backgroundColor: '#F8BCBC',
                    borderColor: '#F8BCBC',
                    opacity: 0.5
                })
            } else {
                return ({
                    color: '#4D5B9E',
                    borderColor: '#4D5B9E',
                    opacity: 0.5
                })
            }
        } else {
            return {}
        }
    }

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
            <label htmlFor={`answer-${answer}`}
                    style={getAnswerClass()}>
                {decodeHtml(answer)}
            </label>
        </>
    )
}

