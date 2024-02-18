import React from "react";
import "../styles/Fof.css";
import { Link } from "react-router-dom";
function Fof() {
  return (
    <div className="fof">
      <div className="fof__title">404</div>
      <Link to="/home">
        <button className="fof__btn">Home</button>
      </Link>
    </div>
  );
}

export default Fof;
