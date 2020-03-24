const getResults = () => {
    console.log('getting results')
    let results
    const ls = window.localStorage.getItem('mathsPro')
    if (ls) results = JSON.parse(ls)
    return results
}
export default getResults