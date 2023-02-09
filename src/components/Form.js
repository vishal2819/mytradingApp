import React from "react";

const Form = () => {
return (
    <>
      <div className="main-form">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <form className="form">
            <label for="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Log in</button>
          </form>
        </div>

        <div className="register">
          <form class="form">
            <label for="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              required=""
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
