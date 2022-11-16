import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router-dom";
import "./Home.css";
import Card from "../../components/card/Card";
import MovieList from "../../components/movieList/MovieList";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data.results));
  }, [type]);

  return (
    <div className="homepage flex flex-col items-center justify-center w-full h-full">
      <Carousel
        className="carousel"
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
      >
        {movie.map((movie) => (
          <Card movie={movie} key={movie.id} />
        ))}
      </Carousel>
      <MovieList />
    </div>
  );
};

export default Home;
