import "./Sidebar.css";
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { CgPokemon } from "react-icons/cg";
import { GiBatMask } from "react-icons/gi";
import { BrandImage } from "../../Assets";

export const SideBar:React.FC = () => {
  let activeStyle: Object;
  activeStyle = {
    backgroundColor: "#28293D",
    padding: ".55rem .5rem",
    boxShadow:
      "0rem 0rem 0.0625rem rgba(0, 0, 0, 0.04), 0rem 0.125rem .25rem rgba(0, 0, 0, 0.32)",
  };

  return (
    <aside className="sidebar">
      <div className="logo-cont">
        <Link to="/" >
        <img src={BrandImage} className="img-responsive" alt="brandImage" />
        </Link>
      </div>
      <hr className="line-horz" />

      <NavLink
        to="/category"
        style={( { isActive }:{isActive:boolean}) =>isActive? activeStyle : {}}
        className="sidebar-title "
        >
        {" "}
        {<CgPokemon className="sidebar-icons mr-2" />}{" "}
        <span className="label subtitle1 semibold">Pokemon</span>{" "}
      </NavLink>
      <NavLink

        to="/batman"
        style={( { isActive }:{isActive:boolean}) =>isActive? activeStyle : {}}
        className="sidebar-title "
      >
        {" "}
        {<GiBatMask className="sidebar-icons mr-2" />}{" "}
        <span className="label subtitle1 semibold">Batman</span>{" "}
      </NavLink>
    </aside>
  );
};
