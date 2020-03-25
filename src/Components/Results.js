import React from 'react'
import '../App.css'
import './Results.css'

const Results = () => {
    let results
    const ls = window.localStorage.getItem('mathsPro')
    if (ls) results = JSON.parse(ls)
    const resetResults = () => {
        window.localStorage.setItem('mathsPro',"")
    }
    const renderTableHeader = () => {
        if (!results) return null
        let header = Object.keys(results[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    const renderTableData = () => {
        if (!results) return null
        return results.map((result, index) => {
            const { date, operation, level, score, correct } = result //destructuring
            return (
                <tr key={date}>
                    <td>{new Date(date).toLocaleString()}</td>
                    <td>{level}</td>
                    <td>{score}</td>
                    <td>{operation}</td>
                    
                    <td>{correct}%</td>
                </tr>
            )
        })
    }

    return (
        <div className="results">
            <table className="resultsTable table">
                <tbody>
                    <tr>{renderTableHeader()}</tr>
                    {renderTableData()}
                </tbody>
            </table>
            <button className="button" onClick={resetResults}>Reset Results</button> 
        </div>

    )
}

export default Results