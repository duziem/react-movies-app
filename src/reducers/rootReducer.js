const initState= {
    name: '',
    rating: '',
    duration: '',
    isError: false,
    moviesList: [],
    searchedMovies: []
}

const rootReducer= (state= initState, action)=>{
    if(action.type === 'SET_NAME'){
        return {
            ...state,
            name: action.name
        }
    }
    if(action.type === 'SET_RATING'){
        return {
            ...state,
            rating: action.rating
        }
    }
    if(action.type === 'SET_DURATION'){
        return {
            ...state,
            duration: action.duration
        }
    }
    if(action.type === 'SET_ISERROR'){
        return {
            ...state,
            isError: action.isError
        }
    }
    if(action.type === 'SET_MOVIESLIST'){
        return {
            ...state,
            moviesList: action.moviesList
        }
    }
    if(action.type === 'SET_SEARCHEDMOVIES'){
        return {
            ...state,
            searchedMovies: action.searchedMovies
        }
    }

    return state;
}

export default rootReducer;