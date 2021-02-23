class Movie {
	// un produs este creat cu o clasa cu urmtorul constructor:
	constructor(title, description,img,year,rating,date) {
		this.title = title;
		this.description = description;
		this.img = img;
		this.year=year;
		this.rating=rating;
		this.date=date;

	}
	// metoda renderProduct adauga produse in interiorul listei de produse
	renderMovie() {
		const movieList = document.querySelector('#movie-list');
		movieList.innerHTML += `
		
			<li class="movie">
			
				<div class='poster'>	
					<img src= ${this.img} alt="movie poster" id="poster">
				</div>
				<div class='specs'>
					<h2>${this.title}</h2>
					<p>Description: ${this.description}</p>
					<p>Year: ${this.year}</p>
					<p>Rating: ${this.rating}</p>
					<p>Date added: ${this.date}</p>
					
				</div>

			</li>
		
		`;
	}
}