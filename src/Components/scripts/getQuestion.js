const getQuestion = (level, operation) => {
    if (!level) level = 1
    let num1 = Math.floor(Math.random() * 10 * Math.sqrt(level)) + 1
    let num2 = Math.floor(Math.random() * 10 * Math.sqrt(level)) + 1
    if (!operation) operation = 'x'
    let biggerNum = Math.max(num1, num2)
    let smallerNum = Math.min(num1, num2)
    let answer1, answer2, answer3, answer4, correct

    switch (operation) {
        case '-':
            num1 = biggerNum
            num2 = smallerNum
            answer1 = (num1 - 1) - num2
            answer2 = (num1 + 1) - num2
            answer3 = num1 - num2 + 2
            answer4 = num1 - num2 - 3
            correct = num1 - num2
            break
        case '+':
            answer1 = (num1 - 1) + num2
            answer2 = (num1 + 1) + num2
            answer3 = num1 + num2 + 2
            answer4 = num1 + num2 - 3
            correct = num1 + num2
            break
        case '÷':
            num1 = num1 * num2
            answer1 = (num1 / num2) -1
            answer2 = (num1 /num2) +1
            answer3 = (num1 / num2) + 2
                        answer4 = (num1 / num2) - num2
            correct = num1 / num2
            break
        default:
            answer1 = (num1 - 1) * num2
            answer2 = (num2 - 1) * num1
            answer3 = num1 * num2 + 2
            answer4 = num1 * num2 - 3
            correct = num1 * num2
            break
    }
    let question = { question: `What is ${num1.toLocaleString()} ${operation} ${num2.toLocaleString()}?`, answer1, answer2, answer3, answer4, correct }
    const correctNo = Math.floor(Math.random() * 3) + 1
    question['answer' + correctNo] = correct
    return question
}

export default getQuestion