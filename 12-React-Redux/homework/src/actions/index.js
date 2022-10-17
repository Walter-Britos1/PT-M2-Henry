export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
  }
  
  export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=92ba2a5e&s=" + titulo)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
  }
  
  export function removeMovieFavorite(IdMovie) {
    return {
        type: "REMOVE_MOVIE_FAVORITE",
        payload: IdMovie
    }
  }

  export function getMovieDetail(IdMovie) {
    return function(dispatch) {
        fetch(` http://www.omdbapi.com/?apikey=92ba2a5e&i=${IdMovie}`)
        .then(response => response.json())
        .then(json => {
            dispatch({
                type: "GET_MOVIE_DETAIL",
                payload: json
            });
        }); 
    }
}