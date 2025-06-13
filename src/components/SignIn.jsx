import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

function SignIn() {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // firebase sign in send
    signInUser(email, password)
    .then(res => {
      console.log(res.user);
      const signInInfo = {
        email,
        lastSignInTime: res.user?.metadata?.lastSignInTime
      };
      console.log("signininfo: ", signInInfo);
      // Update last sign in database
      fetch('http://localhost:3000/users', {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signInInfo)
      })
      .then(res => {
        if(!res.ok) throw new Error("Failed to update user");
        return res.json();
      })
      .then(data => {
        console.log("After update patch", data)
      })
    })
    .catch(error => {
      console.log(error.message);
    })
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="card w-full min-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-center">Login Now!</h3>
            <form onSubmit={handleLogin} className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
              />
              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </form>
            <p className="text-xs">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-700 underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
