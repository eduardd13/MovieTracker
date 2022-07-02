root.innerHTML += `
    <h2>Filme:</h2>
    <ul id="movie-list"></ul>
`;

function renderMovieList(movies) {
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';
    movies.forEach(function (movie) {
        const film = new Movie(movie.nume, movie.descriere, movie.imagine, movie.an, movie.rating, movie.dataAdaugarii);
        film.renderMovie();
    });
}