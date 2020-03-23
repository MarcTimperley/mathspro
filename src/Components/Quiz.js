import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
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
    const [previousQuestion, setPreviousQuestion] = useState()
    const location = useLocation()
    console.log(location)
    const operation = location.pathname.substring(6,7)
    const question = getQuestion(level, operation)
    // console.log(question)
    if (correct / tries > 0.9 && correct > 10) level++
    const onChoice = event => {
        getTries(tries + 1)
        if (event.target.innerText - question.correct === 0) {
            getCorrect(correct + 1)
            setShowCorrect(false)
            setPreviousQuestion()
        } else {
       //     console.log(question)
            setShowCorrect(true)
            setPreviousQuestion(question)
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
                
                <div className="score-total">Your score is {correct} out of {tries}{percent}</div>
            </div>
            <button className="button button-saveScore" onClick={saveResults}>Save Score</button>
            {showCorrect &&
                <DisplayCorrectAnswer props={previousQuestion}/>}
            
        </div>
    )
}



export default Quiz
