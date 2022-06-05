import React, { useEffect } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/login.svg";
import auth from "../firebase.init";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [user2, loading2, errorHook] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const signupHandle = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const pass = event.target.pass.value;
    createUserWithEmailAndPassword(email, pass);
  };

  useEffect(() => {
    const email = user2?.email;
    if (user2) {
      const userData = async () => {
        const { data } = await axios.post("http://localhost:5000/login", {
          email,
        });
        localStorage.setItem("accesToken", data);
        // <===== store user to database ====>
        const res = await axios.put(`http://localhost:5000/user/${email}`, {
          email: email,
        });
        navigate(from);
      };
      userData();
    }
  }, [user2]);
  return (
    <section id="home" class="banner_wrapper">
      <div class="container">
        <div class="row align-items-center signup">
          <div class="col-md-6 my-5 my-md-0 text-center text-md-start">
            <p class="banner-subtitle">Beanmi</p>
            <h1 class="banner-title">Signup</h1>
            <form onSubmit={signupHandle}>
              <div class="mb-3">
                <p for="exampleInputEmail1" class="form-label">
                  Email address
                </p>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="pass"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="learn-more-btn-section">
                <button
                  type="submit"
                  class="nav-link learn-more-btn btn-header"
                >
                  Signup
                </button>
              </div>
              <div className="mt-1 d-flex justify-content-between">
                <p className="nav-link text-black">
                  have account! <Link to="/login">Login</Link>
                </p>
                <Link to="/signup"> Forgot Password</Link>
              </div>
            </form>{" "}
            <button
              className="nav-link learn-more-btn mt-2 btn-extra-header"
              onClick={() => signInWithGoogle()}
            >
              <FaGoogle /> Google
            </button>
          </div>
          <div class="col-md-6 header-img-section">
            <img src={login} class="img-fluid" alt="Banner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
