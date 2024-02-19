import React, { useState } from "react";
import styles from "./LoginCard.module.css";
import { useDispatch } from "react-redux";
import {
  fetchLoginError,
  fetchLoginRequest,
  fetchLoginSuccess,
} from "../../redux/user/action";
import { fetchUser } from "../../api";
import { useNavigate } from "react-router-dom";
function LoginCard() {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchLoginRequest());
    try {
      const userData = await fetchUser(username, password);
      dispatch(fetchLoginSuccess(userData));
      userData
        ? localStorage.setItem("user", JSON.stringify(userData))
        : localStorage.setItem("user", JSON.stringify({}));
      if (userData !== undefined) {
        navigate("/home");
      } else {
        navigate("/login");
      }
      setUsername("");
      setPassword("");
    } catch (error) {
      dispatch(fetchLoginError(error.message));
    }
  };
  return (
    <form method="POST" onSubmit={handleFormSubmit} className={styles.form}>
      <input
        type="text"
        name="username"
        onChange={(e) => setUsername(e.target.value)}
        required
        placeholder="username"
        className={styles.form__input}
      />
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="password"
        className={styles.form__input}
      />
      <button type="submit" className={styles.form__btn}>
        Login
      </button>
      <div className={styles.form__forgetpassword}>
        Forgotten your password?
      </div>
    </form>
  );
}

export default LoginCard;
