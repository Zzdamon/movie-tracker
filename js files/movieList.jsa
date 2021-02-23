// adaugam lista de produse in html
const movieList= document.querySelector('.container');
movieList.innerHTML += `
<div class='listContainer'>

	<ul id="movie-list">
	</ul>
</div>
`;

APP.renderMovieList = (movieArray) => {
	// golim lista in care se vor afisa produsele
	const movieList = document.querySelector('#movie-list');
	movieList.innerHTML = '';
	// pentru fiecare element din vectorul primit ca parametru
	movieArray.forEach( (elem) => {
		// cream un produs
		movie = new Movie(elem.Title,
			elem.Plot,elem.Poster, elem.Year,elem.imdbRating, elem.date);
		// il afisam in pagina web
		movie.renderMovie();
	});
}
