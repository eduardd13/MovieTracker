const root = document.querySelector('#root');
const movies = [
    {
        nume: 'Matrix',
        descriere: 'bla bla bla',
        imagine: 'imagine',
        an: 2005,
        rating: '5',
        dataAdaugarii: 'Wed, 23 Jun 2021 15:55:45 GMT'
    },
    {
        nume: '365 Zile',
        descriere: 'Dragoste plm',
        imagine: 'imagine',
        an: '2009',
        rating: '3',
        dataAdaugarii: 'Wed, 23 Jun 2021 16:55:45 GMT'
    },
    {
        nume: 'Love & Monsters',
        descriere: 'A crescut gandacii',
        imagine: 'imagine',
        an: '2021',
        rating: '4',
        dataAdaugarii: 'Wed, 23 Jun 2021 21:55:45 GMT'
    }
];

function getMovies() {
    console.log(movies);
    const localStorageMovies = localStorage.getItem("movies");
    console.log(localStorageMovies);
    const parsedMovies = JSON.parse(localStorageMovies);
    return parsedMovies;
}

function setMovies(movies) {
    const stringifiedMovies = JSON.stringify(movies);
    localStorage.setItem("movies", stringifiedMovies);
}

if(getMovies() === null){
    setMovies(movies);
}

function startRendering() {
    const localStorageMovies = getMovies();
    renderMovieList(localStorageMovies);
}
window.addEventListener('load', startRendering);