import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";

import React from "react";

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="search-box">
        <input
          type="text"
          name="search-box"
          id="search"
          placeholder="search"
          //  onChange={(event) =>
          //   filterDispatch({
          //     type: filterActions.SET_SEARCH_QUERY,
          //     payload: event.target.value,
          //   })
          // }
        />
        <BsSearch className="nav-icons" />
      </div>
      <nav className="flex ">
        <Link to="/login">
          <button className="btn btn-contained yellow ml-2 semibold">
            Login
          </button>
        </Link>
      </nav>
    </header>
  );
};
