

// cream un obiect global, numit APP
window.APP = {};
// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('#root');
window.mainPage.innerHTML+=`<div class="header"></div>
<div class="container"></div>`;
const date= new Date();
// tot in APP cream un vector de obiecte, numit products
APP.movies = [
	{

		Title: 'Iron Man',
		Year:2008,
		Plot:`After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.","Language":"English, Persian, Urdu, Arabic, Kurdish, Hindi, Hungarian","Country":"USA, Canada","Awards":"Nominated for 2 Oscars. Another 21 wins & 65 nominations.`,
		Poster:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
		imdbRating: 7.9,
		date:date
	},
	{
		Title:"The Avengers",
		Year:2012,
		Plot:`Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.`,
		Poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
		imdbRating: 8.0,
		date:date
	},
	{
		Title: 'Black Panther',
		Year:2018,
		Plot: `T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past`,
		Poster:"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
		imdbRating: 7.3,
		date: date
	}
];

// pentru stocare persistenta(sa nu se mai piarda datele la refresh), folosim lacalStorage
// avand in vedere ca vom face de mai multe ori operatiile de introducere a datelor in localStorage
// si de extragere a datelor din localStorage, vom face doua functii

// pentru a adauga vectorul de produse in local storage, trebuie mai intai sa il facem string
// pentru cheia "products", vom avea valoarea corespunzatoare, dar facuta string
APP.addMovies = (movies) => {
	localStorage.setItem("movies", JSON.stringify(movies));
}
// pentru a extrage vectorul de produse, luam valoarea corespunzatoare cheii "products"
// apoi o parsam, pentru a deveni iar vector de obiecte, si o returnam 
APP.getMovies = () => {
	const movies = localStorage.getItem("movies");
	return JSON.parse(movies);
};
// daca nu avem nimic in baza de date
// introducem vectorul de produse in localStorage
if (APP.getMovies() === null){
	APP.addMovies(APP.movies);
}


function startRendering() {
	// "randam" lista de produse, trimitand ca parametru APP.products (incarcat mai sus)
	APP.renderMovieList(APP.getMovies());
}
// DUPA ce s-au incarcat TOATE scripturile, apelam functia startRendering
// facem asta pentru ca la momentul incarcarii lui index.js, nu stim cine renderProductList()
window.addEventListener('load', startRendering);