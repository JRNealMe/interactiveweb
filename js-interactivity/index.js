function addMovie (event) {
    event.preventDefault();
    const inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    // console.log(movieTitle);
    movie.appendChild(movieTitle);
    document.querySelector('ul').appendChild(movie);
    

}


const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', addMovie); 
