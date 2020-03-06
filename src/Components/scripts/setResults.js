const setResults = score => {
    console.log('saving results')
    console.log(score)
    const ls = window.localStorage.getItem('mathsPro')
    let lsO = []
    if (ls) lsO = JSON.parse(ls)
    lsO.push(score)
    window.localStorage.setItem('mathsPro',JSON.stringify(lsO))
}
export default setResults
