import React from 'react'
import {connect} from 'react-redux'

function MoviesList(props) {
    let domIndex= 0; //used to generate unique indexes for the rendered list of movies
    const {moviesList, searchedMovies}= props;
if(moviesList){
    console.log(moviesList)
    
    moviesList.sort((a,b)=>{
      let durationA= a.duration
      let durationB= b.duration

    if(durationA.includes('m')){
      durationA= parseFloat(durationA) / 60
    }
    if(durationB.includes('m')){
      durationB= parseFloat(durationB) / 60
    }
    
    if(parseFloat(durationB) > parseFloat(durationA)){
        return 1;
    }
    if(parseFloat(durationB) < parseFloat(durationA)){
        return -1;
    }
    return 0;
  })
}
//   useEffect(()=>{

//   } , [moviesList] )

  return (
    <section>
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
       {searchedMovies.length ?
       searchedMovies.map(movie=> <li key= {++domIndex}
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      > 
        <div className='layout-column w-40'>
          {/* use this header for movie name */}
       <h3 className='my-3'>{movie.name}</h3>
          {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
       <p className='my-0'>{movie.rating}</p>
        </div>
        <div className='layout-row my-auto mr-20'>
          {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
       <p className='justify-content-end'>{movie.duration}</p>
        </div>
      </li>) :
       
       moviesList.map(movie=> <li key= {++domIndex}
        className='flex slide-up-fade-in justify-content-between'
        style={{borderBottom: '2px solid var(--primary-color)'}}
      > 
        <div className='layout-column w-40'>
          {/* use this header for movie name */}
       <h3 className='my-3'>{movie.name}</h3>
          {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
       <p className='my-0'>{movie.rating}</p>
        </div>
        <div className='layout-row my-auto mr-20'>
          {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
       <p className='justify-content-end'>{movie.duration}</p>
        </div>
      </li>
        )
      }
      
      </ul>
      
    </section>
  )
}

const mapStateToProps= (state)=>{
  return {
    moviesList: state.moviesList,
    searchedMovies: state.searchedMovies
  }
}
// const mapDispatchToProps= (dispatch)=>{
//     return {
//       setsearchedMovies: (value)=>{dispatch({type: 'SET_SEARCHEDMOVIES', searchedMovies: value})}
//     }
//   }

export default connect(mapStateToProps)(MoviesList);