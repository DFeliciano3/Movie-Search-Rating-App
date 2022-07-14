//import {API_KEY} from "/Users/Destiny/Development/code/phase-1/Movie-Search-Rating-App/config.js" 
const myAPIKey = 'api_key=84c791a4a4576eee38aa7eeffbb5bccd'; 
const domainURL = 'https://api.themoviedb.org/3';
const pathForAPI = 'https://api.themoviedb.org/3discover/movie?sort_by=popularity.desc&api_key=84c791a4a4576eee38aa7eeffbb5bccd';
const imageURL = 'https://image.tmdb.org/t/p/w500/';
const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=84c791a4a4576eee38aa7eeffbb5bccd';
const main = document.getElementById('main');



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
        renderAllMovies(data.results);
    })
}

function renderAllMovies(data) {
     document.querySelector('main').innerHTML = '';

        data.forEach(movie => {
        let {title, poster_path, vote_average, overview, id} = movie;
        let movieEl = document.createElement('div');
        
        movieEl.addEventListener('mouseover', (e) => {
            //console.log("mouse in")
            let overviewDiv = movieEl.querySelector('.hidden-div')
            //overviewDiv.style.display = 'block'
            overviewDiv.classList.add('displayed')
        });
        movieEl.addEventListener('mouseleave', (e) => {
            //console.log("mouse in")
            let overviewDiv = movieEl.querySelector('.hidden-div')
            //overviewDiv.style.display = 'none'
            overviewDiv.classList.remove('displayed')
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
//console.log(API_KEY)
