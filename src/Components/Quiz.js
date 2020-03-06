import React, { useState } from 'react'
import '../quiz.css'
import '../App.css'
import getQuestion from './scripts/getQuestion'
import setResults from './scripts/setResults'
import DisplayCorrectAnswer from './DisplayCorrectAnswer'
// import getScore from './scripts/getScore'
let level = 1
const Quiz = () => {
    const [tries, getTries] = useState(0)
    const [correct, getCorrect] = useState(0)
    const [showCorrect, setShowCorrect] = useState(false)
    const question = getQuestion(level)
    if (correct / tries > 0.9 && correct > 10) level++
    const onChoice = event => {
        getTries(tries + 1)
        if (event.target.innerText - question.correct === 0) {
            getCorrect(correct + 1)
            setShowCorrect(false)
        } else {
            //correctAnswer = `<div className="score-result">The correct answer to ${question.question} is ${question.correct}</div>`
            setShowCorrect(true)
            // displayCorrectAnswer(correctAnswer)
        }
    }
    const saveResults = () => {
        const score = { date: new Date(), level: level, score: rate }
        setResults(score)
    }
    const rate = Math.round(100 * correct / tries)
    const percent = isNaN(rate) ? '.' : `(${rate}%).`
    return (
        <div className="quiz">
            <div className="question" id="question">{question.question}</div>
            <div className="answers">
                <span className="answer answer-red" onClick={onChoice} id="answer1">{question.answer1}</span>
                <span className="answer answer-blue" onClick={onChoice} id="answer2">{question.answer2}</span>
                <span className="answer answer-green" onClick={onChoice} id="answer3">{question.answer3}</span>
                <span className="answer answer-yellow" onClick={onChoice} id="answer4">{question.answer4}</span>
            </div>
            <div className="score">
                {showCorrect &&
                <DisplayCorrectAnswer props={question}/>}
                <div className="score-total">Your score is {correct} out of {tries}{percent}</div>
            </div>
            <button className="button button-saveScore" onClick={saveResults}>Save Score</button>
        </div>
    )
}



export default Quiz
