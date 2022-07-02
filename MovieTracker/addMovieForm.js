root.innerHTML += `
    <form id="add-movie">
        <label for="nume">Nume:</label>
        <input type="text" name="nume" id="nume"/>
        <label for="descriere">Descriere:</label>
        <input type="text" name="descriere" id="descriere"/>
        <label for="imagine">Imagine:</label>
        <input type="text" name="imagine" id="imagine"/>
        <label for="an">An:</label>
        <input type="text" name="an" id="an"/>
        <label for="rating">Rating:</label>
        <input type="text" name="rating" id="rating"/>
        <input type="submit"/>
    </form>
`

function addFormFunctionality() {
    const form = document.querySelector('#add-movie');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const currentTime = new Date();
        const movieNume = event.target.nume.value;
        const movieDescriere = event.target.descriere.value;
        const movieImagine = event.target.imagine.value;
        const movieAn = event.target.an.value;
        const movieRating = event.target.rating.value;
        const movieDataAdaugarii = currentTime.toUTCString();
        const newMovie = {
            nume: movieNume,
            descriere: movieDescriere,
            imagine: movieImagine,
            an: movieAn,
            rating: movieRating,
            dataAdaugarii: movieDataAdaugarii,
        };

        const localStorageMovies = getMovies();
        localStorageMovies.push(newMovie);
        setMovies(localStorageMovies);

        renderMovieList(localStorageMovies);
    })
    console.log(form);
}

window.addEventListener('load', addFormFunctionality);