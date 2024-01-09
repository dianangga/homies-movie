import './App.css';
import { useEffect, useState } from 'react';
import { getMovieTopRatedList, getSearchMovieTopRatedList } from './api';

const App = () => {

  var [topRatedMovies , setTopRateMoview] = useState([])

  useEffect(() => {
    getMovieTopRatedList().then((result)=>{
      setTopRateMoview(result)
    })
  },[])

  const TopRateMovieList =() =>{
    return topRatedMovies.map((movie,index)=>{
      return (
        <div className="Movie-wrapper" key={index}>
          <div className="Movie-title">{movie.title}</div>
          <img className="Movie-image" src= {`${process.env.REACT_APP_IMAGE_URL}/${movie.poster_path}`} />
          <div className="Movie-rate">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async (q) => {
    if(q.length >=3){
      const result = await getSearchMovieTopRatedList(q)
      setTopRateMoview(result.results)
    }
    if(q.length ==0){
      const result = await getSearchMovieTopRatedList(q)
      setTopRateMoview(result.results)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Homies Movies</h1>
        <input className="Movie-search" 
        placeholder='Cari Film ' 
        onChange={({target}) => search(target.value)}
        />
        <div className="Movie-container">
          <TopRateMovieList />
        </div>
      </header>
    </div>
  );
}

export default App;
