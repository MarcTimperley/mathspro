import React from 'react'
const score = { tries: 0, correct: 0 }
const getScore = (success, question) => {
    
    let result = ''
    console.log(success)
    score.tries++
    if (success === true) {
        score.correct++
        result = `Yay! - Correct!`
    } else {
        result = `The correct answer to ${question.question} is ${question.correct}`
    }
    console.log(score,result)
    return {score:score,result:result}
}

export default getScore
