const myAPIKey = 'api_key=84c791a4a4576eee38aa7eeffbb5bccd'; 
const domainURL = 'https://api.themoviedb.org/3';
const pathForAPI = domainURL + 'discover/movie?sort_by=popularity.desc&'+myAPIKey;
const imageURL = 'https://image.tmdb.org/t/p/w500/';
const searchURL = domainURL + '/search/movie?'+myAPIKey;
const main = document.getElementById('main');
const movies = document.getElementsByClassName('movie');
const form = document.getElementsByTagName('form');
const search = document.getElementById('search');
getAllMovies(pathForAPI);


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// getAllMovies(pathForAPI)  

function getAllMovies() {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=84c791a4a4576eee38aa7eeffbb5bccd')
    .then(res => res.json())
    .then(data => {
        console.log(data.results)
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

// form.addEventListener('sumbit', (e) => {
//     e.preventDefault();

//     let searchMovie = search
// })