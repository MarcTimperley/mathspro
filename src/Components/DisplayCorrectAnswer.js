import React from 'react'
const DisplayCorrectAnswer = correctAnswer => {
    console.log(correctAnswer)
    return (
        <div className="score-result">The correct answer to ${correctAnswer.props.question} is ${correctAnswer.props.correct}</div>
            )
}
export default DisplayCorrectAnswer