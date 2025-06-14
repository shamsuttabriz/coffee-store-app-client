import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

function SignUp() {
  const { createUser } = use(AuthContext);
  console.log(createUser);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFromData } = Object.fromEntries(
      formData.entries()
    );
    console.log(email, password, restFromData);

    // create user in the firebase
    createUser(email, password)
      .then((result) => { 
        const userProfile = {
          email,
          ...restFromData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        }
        // save profile info in the db
        fetch("https://coffee-store-server-ivory-nine.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("After profile save: ",data);
            if(data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your account is created !",
                showConfirmButton: false,
                timer: 1500
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content">
        <div className="card w-full min-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <h3 className="text-2xl font-bold text-center">Register Now!</h3>
            <form onSubmit={handleSignUp} className="fieldset">
              {/* Name */}
              <label className="label text-slate-600 text-base font-bold">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Name"
              />
              {/* Email */}
              <label className="label text-slate-600 text-base font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
              />
              {/* Phone */}
              <label className="label text-slate-600 text-base font-bold">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="input w-full"
                placeholder="Phone"
              />
              {/* Address */}
              <label className="label text-slate-600 text-base font-bold">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="input w-full"
                placeholder="Address"
              />
              {/* Photo */}
              <label className="label text-slate-600 text-base font-bold">
                Photo
              </label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Photo url"
              />
              {/* Password */}
              <label className="label text-slate-600 text-base font-bold">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Signup</button>
            </form>
            <p className="text-xs">
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-700 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
