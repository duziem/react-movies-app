import React, { useEffect } from 'react'
import {connect} from 'react-redux'

function Movieform(props) {
  const {name, duration, rating, isError, moviesList, setisError, setName, setDuration, setRating, setMoviesList}= props

//   useEffect(()=>{
//     if(duration){
//       if(!duration.includes('h') || !duration.includes('m')){
//         setisError(true);
//       }else{
//         if(isError){setisError(false)};
//       }
//     }  
    
//   }, [duration]);

  const handleChange= (e)=>{
    if(e.target.id.includes('name')){
        if(e.target.value) setName(e.target.value)
      return
    //   if(isError){setisError(false)};
    }
    if(e.target.id.includes('ratings')){
        if(e.target.value) setRating(e.target.value + '/100')
      return
    //   if(isError){setisError(false)};
    }
    if(e.target.id.includes('duration')){
        let newDuration;
        if(e.target.value){
            if(e.target.value.search(/h$/) || e.target.value.search(/m$/)){
                newDuration= e.target.value;
                setDuration(newDuration)
                return
            }else{
                setisError(true);
            }
        }
        
        // if(e.target.value.search(/m$/)){
        //     newDuration= parseFloat(e.target.value) / 60;
        //     newDuration= 
        //     //you can set the isError state here
        //     // setisError(true)
        //     setDuration(newDuration)
        //     return
        // }
    }
  }

  const handleClick= ()=>{
      //check the values of name, rating, duration
      if(duration ){

      }
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
    setName: (value)=>{dispatch({type: 'SET_NAME', name: value})},
    setRating: (value)=>{dispatch({type: 'SET_RATING', rating: value})},
    setDuration: (value)=>{dispatch({type: 'SET_DURATION', duration: value})},
    setisError: (value)=>{dispatch({type: 'SET_ISERROR', isError: value})},
    setMoviesList: (value)=>{dispatch({type: 'SET_MOVIESLIST', moviesList: value})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movieform)
