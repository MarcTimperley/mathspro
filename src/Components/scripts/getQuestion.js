const getQuestion = (level) => {
    if (!level) level = 1
    const num1 = Math.floor(Math.random() * 10 * Math.sqrt(level)) + 1
    const num2 = Math.floor(Math.random() * 10 * Math.sqrt(level)) + 1
    const correct = num1 * num2
    let answer1 = (num1 - 1) * num2
    let answer2 = (num2 - 1) * num1
    let answer3 = num1 * num2 + 2
    let answer4 = num1 * num2 -3
    let question = {question: `What is ${num1.toLocaleString()} x ${num2.toLocaleString()}?`, answer1, answer2, answer3, answer4, correct }
    let correctNo = Math.floor(Math.random()*3)+1
    question['answer' + correctNo] = correct
    return question
}

export default getQuestion