const fuzzysearch = async() => {
    let searchValue = document.getElementById('fuzzy').value
    console.log(searchValue)
}
 let buttonSearch = document.getElementById('search')

 buttonSearch.addEventListener('click', fuzzysearch)