import React from 'react'
import {
    Link
} from "react-router-dom"
import '../App.css'

const Home = () => {
    return (
        <div className="home">
            <Link className="link" to={{ pathname: "/quiz/+" }}><button className="button button-accent button-quiz button-square" id="startQuiz">+</button></Link>
            <Link className="link" to={{ pathname: "/quiz/-" }}><button className="button button-accent button-quiz button-square" id="startQuiz">{`\u2212`}</button></Link>
            <Link className="link" to={{ pathname: "/quiz/x" }}><button className="button button-accent button-quiz button-square" id="startQuiz">{`\u00D7`}</button></Link>
            <Link className="link" to={{ pathname: "/quiz/÷" }}><button className="button button-accent button-quiz button-square" id="startQuiz">{`\u00F7`}</button></Link>
            <br />
            <Link className="link" to="/results"><button className="button button-accent button-results button-square" id="results">Results</button></Link>
        </div>

    )
}

export default Home