import React from 'react'
const DisplayCorrectAnswer = correctAnswer => {
    console.log(correctAnswer)
    return (
        <div className="score-correct"><br />{correctAnswer.props.question} = {correctAnswer.props.correct}</div>
            )
}
export default DisplayCorrectAnswer