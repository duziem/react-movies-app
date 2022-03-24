import React from 'react'
import {connect} from 'react-redux'

function Search(props) {

const {moviesList, setsearchedMovies}= props;
  const handleChange= (e)=>{
      //run the function if the input value length is 2 or more
    //   if(e.target.value.length ){

    //   }
    if(moviesList.length){
        let newList= moviesList.filter((movie)=> movie.name.includes(e.target.value.toLowerCase()))
        setsearchedMovies(newList)
    }
    
  }

  return (
    <section className='layout-row justify-content-center mb-40'>
      <input 
        type='text'
        placeholder='Search for movie by name' 
        className='w-75 py-2'
        data-testid='search'
        onChange= {(e)=> {if(e.target.value.length >= 2){handleChange(e)}}}
      />
    </section>
  )
}

const mapStateToProps= (state)=>{
  return {
    moviesList: state.moviesList,
  }
}
const mapDispatchToProps= (dispatch)=>{
  return {
    setsearchedMovies: (value)=>{dispatch({type: 'SET_SEARCHEDMOVIES', searchedMovies: value})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)