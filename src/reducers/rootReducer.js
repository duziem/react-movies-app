const initState= {
    name: '',
    rating: '',
    duration: '',
    isError: false,
    moviesList: []
}

const rootReducer= (state= initState, action)=>{
    if(action.type === 'SET_NAME'){
        return {
            name: action.name
        }
    }
    if(action.type === 'SET_RATING'){
        return {
            name: action.rating
        }
    }
    if(action.type === 'SET_DURATION'){
        return {
            name: action.duration
        }
    }
    if(action.type === 'SET_ISERROR'){
        return {
            name: action.isError
        }
    }
    if(action.type === 'SET_MOVIESLIST'){
        return {
            name: action.moviesList
        }
    }

    return state;
}

export default rootReducer;