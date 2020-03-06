import React from 'react'
import {
    Link
  } from "react-router-dom"
import '../App.css'

const Home = () => {
    return (
        <div className="home">
        <button className="button quiz-button" id="startQuiz"><Link className="link" to="/quiz">Start Quiz</Link></button>
        <br />
        <button className="button results-button" id="results"><Link className="link" to="/results">Results</Link></button>
        </div>

    )
}

export default Home