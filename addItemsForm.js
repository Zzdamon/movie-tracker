// aduagam in HTML formularul de adaugare produs
const formular= document.querySelector('.container');
formular.innerHTML += `
  <div class='formular'>
  <form id="addMovie">
    Title: <input type="text" name="movieTitle">
    <input type="submit" value="Add movie">
  </form>
  <p id="ceas"></p>
  </div>
`;

function addFormFunctionality() {

  // adaugarea produsului
  function addMovie(movie) {
    // preluam produsele din localStorage
    const movies = APP.getMovies();
    // modificarea vectorului de produse
    movie.date= new Date();
    movies.push(movie);
    // adaugam vectorul in localStorage
    APP.addMovies(movies);

    // reafisam produsele
    APP.renderMovieList(movies);
  }

  const form = document.querySelector('#addMovie');
  form.onsubmit = function(event) {
    // trebuie sa prevenim reincarcare paginii
    event.preventDefault();

      //un film a fost adaugat, deci resetam timerul
  resetWatch();

    // luam numele si pretul introduse de utilizator
  
  fetch('http://www.omdbapi.com/?apikey=fced3ba8&t='+event.target.movieTitle.value)
    .then(response => (response.json()))
    .then(data => addMovie(data));
    // console.log(movie);
  
    // fetch('https://dog.ceo/api/breeds/image/random')
    // .then(response => response.json())
    // .then(doggo => {
    //   image=document.querySelector("#doggo");
    //   image.src=`${doggo.message}`;
          
        
    

  
      // const rating= Number(event.target.movieRating.value);
   
    // const title = event.target.movieTitle.value;
    // const rating = Number(event.target.movieRating.value);
    // apelam functia de adaugare a produsului
    // addMovie(movie);
  }
}

// la momentul incarcarii fisierului addItemsForm.js
// inca nu stim cine e APP.renderProductList.
// asadar, inainte ca respectiv functie sa fie apelata,
// vrem sa incarcam celelalte fisiere
window.addEventListener('load', addFormFunctionality);
// window.addEventListener('click', addFormFunctionality);
