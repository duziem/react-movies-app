import React from 'react'
import {connect} from 'react-redux'

function Movieslist(props) {

  const {moviesList}= props;
//   moviesList.sort((a,b)=>{
//     parseFloat(b) > parseFloat(a)
//   })

  return (
    <section>
      
        
      <ul 
        className='styled w-100 pl-0' 
        data-testid='moviesList'
      >
       {moviesList && moviesList.map(movie=>{
         <li 
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
        })
      }
      
      </ul>
      
    </section>
  )
}

const mapStateToProps= (state)=>{
  return {
    moviesList: state.moviesList,
    duration: state.duration
  }
}

export default connect(mapStateToProps)(Movieslist);