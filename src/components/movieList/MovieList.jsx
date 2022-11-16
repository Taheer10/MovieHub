import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Card from "../card/Card";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list card h-full w-full  flex flex-wrap justify-center items-center  bg-slate-900 ">
      <h2 className="list__title w-full text-3xl text-white">
        {(type ? type : "POPULAR").toUpperCase()}
      </h2>
      {movieList.map((movie) => (
        <Card movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
