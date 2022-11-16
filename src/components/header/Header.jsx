import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header  text-white  w-full flex h-max flex-wrap">
      <div className="flex justify-start  w-1/4 headerLeft text-3xl">
        <Link to="/">
          <h1>MOVIE HUB</h1>
        </Link>
      </div>
      <div className="headerRight flex items-center justify-evenly w-3/4">
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
