const API_KEY = '9ed87961dbb9b8beebb5f02b4b9b3eb3';

const fetchPopularFilms = async () => {
    const fetchSearch = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    return fetchSearch.json();
}

const fetchMovieByName = async (name) => {
    const findMovie = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${name}`);
    return findMovie.json();
}

export{fetchPopularFilms, fetchMovieByName}