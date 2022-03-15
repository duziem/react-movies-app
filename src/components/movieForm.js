import React, { useEffect } from 'react'
import {connect} from 'react-redux'

function Movieform(props) {
  // const [name, setName]= useState('')
  // const [duration, setDuration]= useState(null)
  // const [rating, setRating]= useState('')
  // const [isError, setisError]= useState(false)
  const {name, duration, rating, isError, moviesList, setisError, setName, setDuration, setRating, setMoviesList}= props

  useEffect(()=>{
    if(duration){
      if(!duration.includes('h') || !duration.includes('m')){
        setisError(true);
      }else{
        if(isError){setisError(false)};
      }
    }  
    
  }, [duration]);

  const handleChange= (e)=>{
    if(e.target.id.includes('name')){
      setName(e.target.value)
      if(isError){setisError(false)};
    }
    if(e.target.id.includes('ratings')){
      setRating(e.target.value + '/100')
      if(isError){setisError(false)};
    }
    if(e.target.id.includes('duration')){
      setDuration(e.target.value)
    }
  }

  const handleClick= ()=>{
    let newMoviesList= [...moviesList, {name, rating, duration}]
    setMoviesList(newMoviesList)
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
    moviesList: state.moviesList
  }
}
const mapDispatchToProps= (dispatch)=>{
  return {
    setName: (value)=>{dispatch({type: 'SET_NAME', value})},
    setRating: (value)=>{dispatch({type: 'SET_RATING', value})},
    setDuration: (value)=>{dispatch({type: 'SET_DURATION', value})},
    setisError: (value)=>{dispatch({type: 'SET_ISERROR', value})},
    setMoviesList: (value)=>{dispatch({type: 'SET_MOVIESLIST', value})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movieform)
