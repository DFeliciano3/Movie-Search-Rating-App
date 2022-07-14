const myAPIKey = 'api_key=84c791a4a4576eee38aa7eeffbb5bccd'; 
const domainURL = 'https://api.themoviedb.org/3';
const pathForAPI = 'https://api.themoviedb.org/3discover/movie?sort_by=popularity.desc&api_key=84c791a4a4576eee38aa7eeffbb5bccd';
const imageURL = 'https://image.tmdb.org/t/p/w500/';
const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=84c791a4a4576eee38aa7eeffbb5bccd';
const movieGenre = "https://api.themoviedb.org/3/genre/movie/list?api_key=84c791a4a4576eee38aa7eeffbb5bccd";
const mostPopular = "https://api.themoviedb.org/3/movie/popular?api_key=84c791a4a4576eee38aa7eeffbb5bccd";
const inTheatres = "https://api.themoviedb.org/3/movie/now_playing?api_key=84c791a4a4576eee38aa7eeffbb5bccd&language=en-US";
const topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=84c791a4a4576eee38aa7eeffbb5bccd&language=en-US";
const main = document.getElementById('main');
const dropdownBtn = document.querySelector('.dropdown')
const options = document.querySelectorAll('myDropdownMenu')
const dropdownList = document.querySelector('.dropdown-content')


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        let inputSearch = e.target.search.value

        fetch(searchURL+'&query='+inputSearch)
        .then(res => res.json())
        .then(data => renderAllMovies(data.results))
    })
})
  

function getAllMovies() {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=84c791a4a4576eee38aa7eeffbb5bccd')
    .then(res => res.json())
    .then(data => {
        //console.log(data.results.map(element => element.id))
        renderAllMovies(data.results);
    })
}

function renderAllMovies(data) {
     document.querySelector('main').innerHTML = '';

        data.forEach(movie => {
        let {title, poster_path, vote_average, overview, id} = movie;
        let movieEl = document.createElement('div');
        movieEl.addEventListener('mouseover', (e) => {
            e.preventDefault()
            console.log(e.target.alt)
        
        });

        movieEl.classList.add('movie');
        movieEl.innerHTML =  `
        <img src="${imageURL+poster_path}" alt="${title}">
        <div class="movie-info" id=${id}>
          <h3>${title}</h3>
          <span>${vote_average}</span>
        </div>
        <div class="hidden-div">
          <h3>Overview</h3>
          ${overview}
        </div>

        `

       document.querySelector('main').appendChild(movieEl);
    })
};





getAllMovies(pathForAPI)
