import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import MovieList from './components/movieList/MovieList'
import Home from './pages/home/Home'
import MovieDetails from './pages/movieDetails/MovieDetails'

const App = () => {
  return (
    <div className="flex flex-wrap w-full h-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='/movies/:type' element={<MovieList/>}></Route>
          <Route path='/movie/:id' element={<MovieDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App