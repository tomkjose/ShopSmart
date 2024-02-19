import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../styles/landing.css";
function Landing() {
  const user = useSelector((state) => state.user.user);
  // console.log("user", user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user || Object.keys(user).length === 0) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div className="landing">
      <div className="landing__content">
        <div className="landing__title">ShopSmart: Explore, Shop, Enjoy!</div>
        <div className="landing__description">
          Welcome to ShopSmart, where convenience meets endless options. From
          fashion to electronics, find it all in one place. Shop confidently and
          effortlessly. Your new online shopping haven awaits.
        </div>
        <Link to="/login">
          <button className="landing__btn">Explore</button>
        </Link>
      </div>
      <img src="images/home.svg" alt="shopping" className="landing__image" />
    </div>
  );
}

export default Landing;
