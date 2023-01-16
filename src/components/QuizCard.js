import '../styles.css';


export default function QuizCard({ children }) {

    return (
        <main className='quiz-card'>
            <fieldset>
                {children}
            </fieldset>
            <hr />
        </main>
    )
}

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