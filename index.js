const API_KEY = "api_key=84c791a4a4576eee38aa7eeffbb5bccd"; 

const BASE_URL = 'https://api.themoviedb.org/3'

const API_URL= BASE_URL + 'discover/movie?sort_by=popularity.desc'
+API_KEY;

const imageURL = 'https://image.tmdb.org/t/p/w500/';

const main = document.getElementById('main');

getAllMovies(API_URL)  

function getAllMovies() {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=84c791a4a4576eee38aa7eeffbb5bccd')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showAllMovies(data.results);
    })
}


function showAllMovies(data) {
     document.querySelector('main').innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML =  `
        <img src="${imageURL+poster_path}" alt="${title}">
        <div class="movie-info">
          <h3>${title}</h3>
          <span>${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>

        `

       document.querySelector('main').appendChild(movieEl);
    })
}