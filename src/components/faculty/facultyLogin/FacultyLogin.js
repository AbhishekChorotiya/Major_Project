import React from "react";

const FacultyLogin = () => {
  return (
    <>
      <div class="nav">
        <div class="title">
          <h2>FACULTY</h2>
        </div>
      </div>

      <div class="container">
        <div class="log">
          <h4>Login</h4>
        </div>
        <div class="form">
          <input class="inp" type="text" placeholder="username" />
          <input class="inp" type="password" placeholder="password" />
          <button class="inp btn">Login</button>
        </div>
        <a href="#" id="fp">
          Forgot Password?
        </a>
      </div>
    </>
  );
};

export default FacultyLogin;
