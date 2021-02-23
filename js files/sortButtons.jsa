// aduagam in pagina HTML elementul de sortare
const sortings = document.querySelector('.formular');
sortings.innerHTML += `
<div class='sortings'>
  <button id="sortByRating">Sort by rating</button>
  <button id="sortByName">Sort by name</button>
  <button id="sortByDate">Sort by date added</button>
  <button id="sortByYear">Sort by year</button>

  </div>
`;


// functia de sortare
function sortMovies(sortType) {
  switch(sortType) {
    // in cazul in care e apasat butonul de sortare dupa pret
    case "sortByRating":
      // sortam dupa pret, modificand vectorul de produse
      // mai intai trebuie sa luam produsele din baza de date
      const sortedRating = APP.getMovies().sort((elem1, elem2) => {
      
         return -(elem1.imdbRating - elem2.imdbRating);
      });
      APP.addMovies(sortedRating);
      // then we render the sorted list
      APP.renderMovieList(sortedRating);
      break;


    case "sortByName":
         const sortedName = APP.getMovies().sort((elem1, elem2) => {
          
          if(elem1.Title>elem2.Title){
            return 1;
          }
          if(elem1.Title<elem2.Title){
            return -1;
          }
          return 0;

       });
       APP.addMovies(sortedName);
       // then we render the sorted list
       APP.renderMovieList(sortedName);
       break;

    case "sortByDate":
        const sortedDate = APP.getMovies().sort((elem1, elem2) => {
          
         
          if(elem1.date>elem2.date){
            return 1;
          }
          if(elem1.date<elem2.date){
            return -1;
          }
          return 0;
       });

       // we put products in our database
       APP.addMovies(sortedDate);
       // then we render the sorted list
       APP.renderMovieList(sortedDate);
       break;

       case "sortByYear":
        const sortedYear = APP.getMovies().sort((elem1, elem2) => 
          
         
         { return elem1.Year-elem2.Year;});
        

       // we put products in our database
       APP.addMovies(sortedYear);
       // then we render the sorted list
       APP.renderMovieList(sortedYear);
       break;
  }

}

// cand se face click pe butonul de sortare dupa pret, se apeleaza functia de sortare
const sortByRating = document.querySelector('#sortByRating');
sortByRating.addEventListener('click', function() {
  sortMovies('sortByRating');
})

const sortByName = document.querySelector('#sortByName');
sortByName.addEventListener('click', function() {
  sortMovies('sortByName');
})

const sortByDate = document.querySelector('#sortByDate');
sortByDate.addEventListener('click', function() {
  sortMovies('sortByDate');
})

const sortByYear = document.querySelector('#sortByYear');
sortByYear.addEventListener('click', function() {
  sortMovies('sortByYear');
})
