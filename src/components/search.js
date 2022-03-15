import React from 'react'
import {connect} from 'react-redux'

function Search(props) {

const {moviesList, setMoviesList}= props;
  const handleChange= (e)=>{
      //run the function if the input value length is 2 or more
    //   if(e.target.value.length ){

    //   }
    let newList= moviesList.filter((movie)=> movie.name.startsWith(e.target.value))
    setMoviesList(newList)
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
    setMoviesList: (value)=>{dispatch({type: 'SET_MOVIESLIST', value})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)