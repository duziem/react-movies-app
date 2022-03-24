import React from 'react'
import './App.css';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer'

import { MovieForm, MoviesList, Search } from './components'
const store= createStore(rootReducer);
const title = 'Favorite Movie Directory'

function App() {
  return (
    <Provider store= {store} >
    <div>
    <h2>{ title }</h2>
    <div className='layout-row justify-content-center mt-100' style= {{display: 'flex'}}>
      <div className='w-30 mr-75' style={{width:'30%', marginRight:'75px'}}>
        <MovieForm />
      </div>
      <div className='layout-column w-30' style={{width:'30%'}}>
        <Search />
        <MoviesList /> 
        <div data-testid='noResult'>
          <h3 className='text-center'>No Results Found</h3>
        </div>
      </div>
    </div> 
  </div>
  </Provider>
  );
}

export default App;
