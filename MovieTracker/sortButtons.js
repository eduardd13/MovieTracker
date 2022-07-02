root.innerHTML += `
    <div>
        <button id="sort-by-nume">Sorteaza dupa nume</button>
        <button id="sort-by-an">Sorteaza dupa an</button>
        <button id="sort-by-rating">Sorteaza dupa rating</button>
        <button id="sort-by-dataAdaugarii">Sorteaza dupa data adaugarii</button>
    </div>
`;

function sortMovies(sortType) {
    const localStorageMovies = getMovies();
    let sortedArray = [];
    switch(sortType) {
        case "SORT_BY_NUME":
            sortedArray = localStorageMovies.sort((elem1, elem2) => {
                var film1 = elem1.nume.toUpperCase();
                var film2 = elem2.nume.toUpperCase();
                return (film1 < film2) ? -1 : (film1 > film2) ? 1 : 0;
            });
            setMovies(sortedArray);
            renderMovieList(sortedArray);
            break;
        case "SORT_BY_AN":
            sortedArray = localStorageMovies.sort((elem1, elem2) => {
                    return (elem1.an < elem2.an) ? -1 : (elem1.an > elem2.an) ? 1 : 0;
                }
            );
            setMovies(sortedArray);
            renderMovieList(sortedArray);
            break;
        case "SORT_BY_RATING":
            sortedArray = localStorageMovies.sort((elem1, elem2) => {
                return (elem1.rating < elem2.rating) ? -1 : (elem2.rating > elem2.rating) ? 1 : 0;
            })
            setMovies(sortedArray);
            renderMovieList(sortedArray);
            break;
        case "SORT_BY_DATAADAUGARII":
            sortedArray = localStorageMovies.sort((elem1, elem2) => {
                var data1 = new Date(elem1.dataAdaugarii);
                var data2 = new Date(elem2.dataAdaugarii);
                return (data1 < data2) ? -1 : (data1 > data2) ? 1 : 0; 
            })
            setMovies(sortedArray);
            renderMovieList(sortedArray);
            break;
    }
}

function addSortingFunctionality() {
    const sortByNume = document.querySelector('#sort-by-nume');
    sortByNume.addEventListener('click', function() {
        sortMovies('SORT_BY_NUME');
    });

    const sortByAn = document.querySelector('#sort-by-an');
    sortByAn.addEventListener('click', function() {
        sortMovies('SORT_BY_AN')
    });

    const sortByRating = document.querySelector('#sort-by-rating');
    sortByRating.addEventListener('click', function() {
        sortMovies('SORT_BY_RATING')
    });

    const sortByDataAdaugarii = document.querySelector('#sort-by-dataAdaugarii');
    sortByDataAdaugarii.addEventListener('click', function() {
        sortMovies('SORT_BY_DATAADAUGARII')
    })
}

window.addEventListener('load', addSortingFunctionality);

