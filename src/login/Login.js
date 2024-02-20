import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");
  console.log("username", username);
  console.log("password", password);

  function validation() {
    if (username == " " && password == " ") {
      alert(" Please enter your phone Number and Password");
    } else if (!username.match("[0-9]") && password.length > 15) {
      alert("Enter a valid phone Number password");
    } else {
      navigate("/home");
      alert("Success");
    }
  }

  return (
    <div className="loginContainer">
      <h3 style={{ textAlign: "center", marginTop: 20 }}>Login</h3>
      <div className="usernameContainer">
        <label>
          Username
          <input
            type="text"
            name="username"
            placeholder="Enter Phone Number"
            maxLength={10}
            onChange={(e) => setUsername(e.target.value)}
            pattern="^[0-9\b]+$"
          />
        </label>
      </div>

      <br />
      <div className="passwordContainer">
        <label>
          {" "}
          password
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <button className="submit" onClick={validation}>
        Submit
      </button>
    </div>
  );
};

export default Login;
