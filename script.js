document.getElementById('searchButton').addEventListener('click', searchMovies) 

let apiKey = 'b79e2f976120e679c660a4f4cdddfa0e'
let urlBase = 'https://api.themoviedb.org/3/search/movie'
let urlImg = 'https://image.tmdb.org/t/p/w200'

let resultContainer = document.getElementById('results')


function searchMovies(){
    resultContainer.innerHTML='Cargando . . .'
    let searchInput = document.getElementById('searchInput').value
    fetch(`${urlBase}?query=${searchInput}&api_key=${apiKey}`) 
    .then(response => response.json())
    .then(response => displayMovies(response.results))
}

function displayMovies(movies){
    
    resultContainer.innerHTML=''
    if(movies.length === 0){
        resultContainer.innerHTML = `<p> No se encontraron resultados para su busqueda </p>`
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('h6')
        releaseDate.textContent = 'La fecha de estreno fue: ' +movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)

        
    });
}