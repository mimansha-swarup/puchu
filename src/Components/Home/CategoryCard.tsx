import { Link } from "react-router-dom";
import React from "react";

export const CategoryCard: React.FC = () => {
  return (
    <Link to="/category" className="text-white-04">
      <div className="flex flex-column">
        <img
          className="avatar-lg avatar-round"
          src="https://wallpapercave.com/wp/LdDnYdd.jpg"
          alt="pokemon"
        />

        <p className="subtitle1 text-center ">Pokemon</p>
      </div>
    </Link>
  );
};
