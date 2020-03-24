import React from 'react'
import '../App.css'
import './Results.css'
import getResults from './scripts/getResults'

const Results = () => {
    const results = getResults()
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
            const { date, operation, level, score } = result //destructuring
            return (
                <tr key={date}>
                    <td>{new Date(date).toLocaleString()}</td>
                    <td>{operation}</td>
                    <td>{level}</td>
                    <td>{score}%</td>
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
        </div>

    )
}

export default Results