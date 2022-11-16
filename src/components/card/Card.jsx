import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="rounded-md card-detail   w-64 bg-red-700"
    >
      <div className="">
        <img
          className="w-full h-full "
          src={`https://image.tmdb.org/t/p/original${
            movie ? movie.poster_path : ""
          }`}
          alt="posterimage"
        />
        <h1 className="title text-white">{movie.title}</h1>
      </div>
    </Link>
  );
};

export default Card;
