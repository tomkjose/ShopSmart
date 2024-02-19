import React, { useEffect } from "react";
import LoginCard from "../components/LoginCard/LoginCard";
import "../styles/login.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Login() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user ? Object.keys(user).length !== 0 : user) {
      navigate("/home");
    }
  }, [user, navigate]);

  return (
    <div className="login">
      <div className="login__title">Login</div>
      <LoginCard />
      <div className="signup__link">
        Already have an account? <span>Sign up</span>
      </div>
    </div>
  );
}

export default Login;
