// const fuzzysearch = async () => {
//     let searchValue = document.getElementById('fuzzy').value
//     console.log(searchValue)
// }
// let buttonSearch = document.getElementById('search')
// buttonSearch.addEventListener('click', fuzzysearch)

// async function mapFormHandler(event) {
//     event.preventDefault();
//     var searchMap = "hello"

//     if (searchMap) {
//         await fetch('/api/map', {
//             method: 'POST',
//             body: JSON.stringify({
//                 searchMap
//             }),
            
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then (
//             data => data.json()
//         ).then (
//             data => {
//                 console.log(data.url)
//             }
//         )
//     }
// }