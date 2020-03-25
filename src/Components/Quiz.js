import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Quiz.css'
import '../App.css'
import getQuestion from './scripts/getQuestion'
import setResults from './scripts/setResults'
import DisplayCorrectAnswer from './DisplayCorrectAnswer'
import Fireworks from './Fireworks'
let level = 1

const Quiz = () => {
    const [tries, setTries] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [showCorrect, setShowCorrect] = useState(false)
    const [previousQuestion, setPreviousQuestion] = useState()
    const [levelCorrect, setlevelCorrect] = useState(0)
    const [levelTries, setlevelTries] = useState(0)
    const [score, setScore] = useState(0)
    const [showLevelUp, setShowLevelUp] = useState(false)
    const location = useLocation()
    const operation = location.pathname.substring(6, 7)
    const question = getQuestion(level, operation)
    const startTime = new Date()
    if (levelCorrect / levelTries > 0.9 && levelCorrect > 9) {
        level++
        setlevelCorrect(0)
        setlevelTries(0)
        setShowLevelUp(true)
    }
    const onChoice = event => {

        setTries(tries + 1)
        setlevelTries(levelTries + 1)
        if (event.target.innerText - question.correct === 0) {
            const timeTaken = Math.floor((new Date() - startTime) / 1000) //seconds to answer correctly
            console.log(timeTaken)
            const newScore = (timeTaken > 30) ? 1 : 30 - timeTaken
            setScore(score + newScore)
            setCorrect(correct + 1)
            setlevelCorrect(levelCorrect + 1)
            setShowCorrect(false)
            setPreviousQuestion()
        } else {
            //     console.log(question)
            setShowCorrect(true)
            setPreviousQuestion(question)
        }
    }
    const clearLevelUp = event => {
        console.log('clear level up')
        console.log(event.target)
        setShowLevelUp(false)
    }
    const saveResults = () => {
        const saveScore = { date: new Date(), level: level, score: score, operation: operation, correct: rate }
        setResults(saveScore)
    }
    const rate = Math.round(100 * correct / tries)
    const percent = isNaN(rate) ? '' : ` (${rate}%)`
    return (
        <div className="quiz">
            {!showLevelUp && <div><div className="question" id="question">{question.question}</div>
                <div className="answers">
                    <span className="answer answer-red" onClick={onChoice} id="answer1">{question.answer1}</span>
                    <span className="answer answer-blue" onClick={onChoice} id="answer2">{question.answer2}</span>
                    <span className="answer answer-green" onClick={onChoice} id="answer3">{question.answer3}</span>
                    <span className="answer answer-yellow" onClick={onChoice} id="answer4">{question.answer4}</span>
                </div>
                <div className="score">
                    <div className="score-total score-score">Your score is {score.toLocaleString()}</div>
                    <div className="score-total">You have got {correct} out of {tries}{percent}</div>
                    <div className="score-total score-level">Level {level}</div>
                </div>
                <button className="button button-saveScore" onClick={saveResults}>Save Score</button>
            </div>}
            {showCorrect &&
                <DisplayCorrectAnswer props={previousQuestion} />}
            {showLevelUp && <div onClick={clearLevelUp}><Fireworks /></div>}

        </div>
    )
}



export default Quiz
