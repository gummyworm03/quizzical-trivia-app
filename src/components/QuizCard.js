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

    
    //show correct/incorrect an`ans-label ${swers when checkA}`nswers is true
    //if selected answer === correct answer, turn green,
    //if selected answer !== correct answer, turn red && turn correct answer green
    //checkAnswers && currentQuestion.answers[] === currentQuestion.correctAnswer ? ans-correct : 
    //                                                                                             currentQuestion.selectedAnswer === answers[] ?  ans-incorrect : ""

    //checkAnswers ? currentQuestion.answers[] === currentQuestion.correctAnswer ? ans-correct : 
    //                                                                                             currentQuestion.selectedAnswer === answers[] ?  ans-incorrect : ""
    //              : ""
//    if (checkAnswers) {
//     if (currentQuestion.answers[0] === currentQuestion.correctAnswer) {
//         return 'ans-correct'
//     } else if (currentQuestion.selectedAnswer === answers[0]) {
//         return 'ans-incorrect'
//     } else {
//         return ''
//     }
//    }

    function getAnswerClass(index) {
        if (props.checkAnswers) {
            if (currentQuestion.answers[index] === currentQuestion.correctAnswer) {
                return ({
                    backgroundColor: '#94D7A2',
                    borderColor: '#94D7A2'
                })
            } else if (currentQuestion.selectedAnswer === currentQuestion.answers[index]) {
                return ({
                    backgroundColor: '#F8BCBC',
                    borderColor: '#F8BCBC'
                })
            } else {
                return {}
            }
        } else {
            return {}
        }
    }
//className={`ans-label ${getAnswerClass(0)}`}
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
                <label htmlFor={`answer-${currentQuestion.answers[0]}`}
                        style={getAnswerClass(0)}
                        className={''}>
                    {decodeHtml(currentQuestion.answers[0])}
                </label>
                
                <input 
                    type="radio"
                    id={`answer-${currentQuestion.answers[1]}`}
                    name={`answer-${props.id}`}
                    value={currentQuestion.answers[1]}
                    checked={currentQuestion.selectedAnswer === currentQuestion.answers[1]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                    
                />
                <label htmlFor={`answer-${currentQuestion.answers[1]}`}
                        style={getAnswerClass(1)}
                        className={''}>
                    {decodeHtml(currentQuestion.answers[1])}
                </label>
                
                <input 
                    type="radio"
                    id={`answer-${currentQuestion.answers[2]}`}
                    name={`answer-${props.id}`}
                    value={currentQuestion.answers[2]}
                    checked={currentQuestion.selectedAnswer === currentQuestion.answers[2]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                />
                <label htmlFor={`answer-${currentQuestion.answers[2]}`}
                        style={getAnswerClass(2)}
                        className={''}>
                    {decodeHtml(currentQuestion.answers[2])}
                </label>
                
                <input 
                    type="radio"
                    id={`answer-${currentQuestion.answers[3]}`}
                    name={`answer-${props.id}`}
                    value={currentQuestion.answers[3]}
                    checked={currentQuestion.selectedAnswer === currentQuestion.answers[3]}
                    onChange={(event)=>props.handleChange(event,props.id)}
                />
                <label htmlFor={`answer-${currentQuestion.answers[3]}`}
                        style={getAnswerClass(3)}
                        className={''}>
                    {decodeHtml(currentQuestion.answers[3])}
                </label>

            </fieldset>
            <hr />
        </main>
    )
}

