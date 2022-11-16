import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './MovieDetails.css'

const MovieDetails = () => {

    const [movieDetail, setMovieDetail] = useState([])

    const { id } = useParams();

    useEffect(() => {
     fetch(
       `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
     )
       .then((res) => res.json())
       .then((data) => setMovieDetail(data));
    }, [movieDetail]);

   
  return (
    <div className="movie__detail h-screen w-screen flex flex-wrap flex-col justify-center items-center text-white ">
      <div className="movie__detailLeft ">
        <div className="movie__posterBox">
          <img
            className="movie__poster"
            alt="posterimage"
            src={`https://image.tmdb.org/t/p/original${
              movieDetail ? movieDetail.poster_path : ""
            }`}
          />
        </div>
      </div>
      <div className="movie__detailRight">
        <div className="movie__detailRightTop" key={id}>
          <div className="movie__name text-4xl">
            {movieDetail ? movieDetail.original_title : ""}
          </div>
          <div className="movie__tagline">
            {movieDetail ? movieDetail.tagline : ""}
          </div>
          <div className="movie__rating">
            {movieDetail ? movieDetail.vote_average : ""}{" "}
            <i class="fas fa-star" />
            <span className="movie__voteCount">
              {movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}
            </span>
          </div>
          <div className="movie__runtime">
            {movieDetail ? movieDetail.runtime + " mins" : ""}
          </div>
          <div className="movie__releaseDate">
            {movieDetail ? "Release date: " + movieDetail.release_date : ""}
          </div>
          <div className="movie__genres">
            {movieDetail && movieDetail.genres
              ? movieDetail.genres.map((genre) => (
                  <>
                    <span className="movie__genre" id={genre.id}>
                      {genre.name}
                    </span>
                  </>
                ))
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
