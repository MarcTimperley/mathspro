import React from 'react'
import '../App.css'
import '../Results.css'
import getResults from './scripts/getResults'

const Results = () => {
    const results = getResults()
    const renderTableHeader = () => {
        let header = Object.keys(results[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    const renderTableData = () => {
        return results.map((result, index) => {
            const { date, level, score } = result //destructuring
            return (
                <tr key={date}>
                    <td>{new Date(date).toLocaleString()}</td>
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
                    {renderTableHeader()}
                    {renderTableData()}
                </tbody>
            </table>
        </div>

    )
}

export default Results