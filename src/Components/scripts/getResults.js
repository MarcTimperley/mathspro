const getResults = () => {
    console.log('getting results')
    let results = [{date:123, level:3, score: 0.75}, {date:125, level:2, score: 0.7}]
    const ls = window.localStorage.getItem('mathsPro')
    if (ls) results = JSON.parse(ls)
    return results
}
export default getResults