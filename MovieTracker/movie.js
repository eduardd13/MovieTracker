class Movie {
    constructor(nume, descriere, imagine, an, rating, dataAdaugarii) {
        this.nume = nume;
        this.descriere = descriere;
        this.imagine = imagine;
        this.an = an;
        this.rating = rating;
        this.dataAdaugarii = dataAdaugarii;
    } 
    renderMovie() {
        const moviesList = document.querySelector('#movie-list');
        moviesList.innerHTML += `
            <li class="movie">
                <p>Nume: ${this.nume}</p>
                <p>Descriere: ${this.descriere}</p>
                <p>Imagine: ${this.imagine}</p>
                <p>An: ${this.an}</p>
                <p>Rating: ${this.rating}</p>
                <p>Data Adaugarii: ${this.dataAdaugarii}</p>
            </li>
        `;
    }
}