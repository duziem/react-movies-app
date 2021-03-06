import React from 'react'
import {connect} from 'react-redux'

function MovieForm(props) {
  const {
    name, 
    duration, 
    rating, 
    isError, 
    moviesList, 
    setIsError, 
    setName, 
    setDuration, 
    setRating, 
    setMoviesList, 
    searchedMovies,
    setsearchedMovies}= props


  const handleChange= (e)=>{
    if(e.target.id.includes('name')){
      setName(e.target.value.toLowerCase());
    //   if(isError){setisError(false)};
      return;
      
    }
    if(e.target.id.includes('duration')){
        setDuration(e.target.value)
        // if(isError){setisError(false)};
        return;
    }
    if(e.target.id.includes('ratings')){
        setRating(parseInt(e.target.value))
        // if(isError){setisError(false)};
        return;
    }
  }

  const handleClick= ()=>{
      //check that the values of name, rating, duration
      //are not empty
    //   console.log(rating, name, duration);
      if(name && rating && duration){
        //   console.log(duration.search(/h$/));
        //   console.log(duration.search(/m$/));
            // if(!duration.search(/h$/) && !duration.search(/m$/)){
            if(!(/h$/.test(duration)) && !(/m$/.test(duration))) {
                setIsError(true);
                console.log(isError);
                return
            }else{
                let newMoviesList= [...moviesList, {name, rating, duration}]
                setMoviesList(newMoviesList)
                if(searchedMovies) setsearchedMovies([])
            }

      }
    
  }

  return (
    <section>
      <div className='card pa-30'>
        <form onSubmit={ e => e.preventDefault() }>
          <div className='layout-column mb-15'>
            <label htmlFor='name' className='mb-3'>Movie Name</label>
            <input 
              type='text' 
              id='name'
              placeholder='Enter Movie Name'
              data-testid='nameInput'
              onChange= {handleChange}
            />
          </div>
          
          <div className='layout-column mb-30'>
            <label htmlFor='duration' className='mb-3'>Duration</label>
            <input 
              type='text' 
              id='duration'
              placeholder='Enter duration in hours or minutes'
              data-testid='durationInput'
              onChange= {handleChange}
            />
          </div>

          <div className='layout-column mb-15'>
            <label htmlFor='ratings' className='mb-3'>Ratings</label>
            <input 
              type='number' 
              id='ratings'
              placeholder='Enter Rating on a scale of 1 to 100'
              data-testid='ratingsInput'
              onChange= {handleChange}
            />
          </div>
          {/* Use this div when time format is invalid */}
          {isError && <div 
            className='alert error mb-30'
            data-testid='alert'
          >
            Please specify time in hours or minutes (e.g. 2.5h or 150m)
          </div>  }
          <div className='layout-row justify-content-end'>
            <button 
              type='submit'
              className='mx-0'
              data-testid='addButton'
              onClick= {handleClick}
            >
              Add Movie
            </button>
          </div>
          </form>
      </div> 
    </section>
  )
}

const mapStateToProps= (state)=>{
  return {
    name: state.name,
    duration: state.duration,
    rating: state.rating,
    moviesList: state.moviesList,
    isError: state.isError,
    searchedMovies: state.searchedMovies
  }
}
const mapDispatchToProps= (dispatch)=>{
  return {
    setName: (value)=>{dispatch({type: 'SET_NAME', name: value})},
    setRating: (value)=>{dispatch({type: 'SET_RATING', rating: value})},
    setDuration: (value)=>{dispatch({type: 'SET_DURATION', duration: value})},
    setIsError: (value)=>{dispatch({type: 'SET_ISERROR', isError: value})},
    setMoviesList: (value)=>{dispatch({type: 'SET_MOVIESLIST', moviesList: value})},
    setsearchedMovies: (value)=>{dispatch({type: 'SET_SEARCHEDMOVIES', searchedMovies: value})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm)
