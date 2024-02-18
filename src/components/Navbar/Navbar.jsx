import React from "react";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../providers/ThemeProvider";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/user/action";
function Navbar() {
  const { currentTheme, changeTheme } = useTheme();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.user.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(userLogout());
    navigate("/login");
  };
  return (
    <nav className={styles.navbar}>
      <Link to="/home">
        <div
          className={styles.nav__brand}
          style={{
            cursor: "pointer",
            color: currentTheme ? "white" : "black",
            textDecoration: "none",
          }}
        >
          E-Cart
        </div>
      </Link>
      <div className={styles.nav__menu}>
        <FontAwesomeIcon
          icon={currentTheme ? faSun : faMoon}
          size="xl"
          style={{
            cursor: "pointer",
          }}
          onClick={changeTheme}
        />
        {user && Object.keys(user).length !== 0 ? (
          <>
            <Link to="/cart">
              <div>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="xl"
                  style={{
                    cursor: "pointer",
                    color: currentTheme ? "white" : "black",
                    textDecoration: "none",
                  }}
                />
                {cart.length > 0 && cart.length <= 9 ? (
                  <div className={styles.cart__count}>{cart.length}</div>
                ) : cart.length > 9 ? (
                  <div className={styles.cart__count}>9+</div>
                ) : (
                  ""
                )}
              </div>
            </Link>
            <img src={user.image} alt="avatar" className={styles.nav__avatar} />
            <button className={styles.nav__logout} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <button
            className={styles.nav__logout}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
