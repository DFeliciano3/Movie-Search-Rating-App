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
        .then(data => showAllMovies(data.results))
    })
})
  

function getAllMovies() {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=84c791a4a4576eee38aa7eeffbb5bccd')
    .then(res => res.json())
    .then(data => {
       // console.log(data.results)
        showAllMovies(data.results);
    })
}



function showAllMovies(data) {
     document.querySelector('main').innerHTML = '';

        data.forEach(movie => {
        let {title, poster_path, vote_average, overview} = movie;
        let movieEl = document.createElement('div');

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
};

getAllMovies(pathForAPI)
