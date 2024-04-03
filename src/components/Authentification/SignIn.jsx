import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

const SignIn = ({ setUserId }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Adding class to body
    document.body.classList.add("login-body");

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("login-body");
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (data.error) {
        return "";
      }
      setUserId(data.customer_id )
      console.log(data.customer_id)
      console.log(setUserId)
      navigate("/medication");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">Username:</label>
          </div>

          <div className="user-box">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
          </div>

          <button type="submit">Login</button>
        </form>
        <div className="dont-have-account">Don't have an account?</div>
        <div>
          <Link to="/signup">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
