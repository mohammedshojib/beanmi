import React, { useEffect, useState } from "react";
import login from "../assets/login.svg";
import axios from "axios";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase.init";
import { FaGoogle } from "react-icons/fa";
// import { toast } from "react-toastify";

const Login = () => {
  const [signInWithEmailAndPassword, user2, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [user, loading2, errorHook] = useAuthState(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [semail, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.pass.value;
    signInWithEmailAndPassword(email, password);
    console.log(email, password);
  };
  const handleReset = (event) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, semail);
    // toast.success("Link sended succsesfully");
  };
  const email = user?.email;
  useEffect(() => {
    if (user) {
      const userData = async () => {
        const { data } = await axios.post(
          "https://cryptic-fjord-80366.herokuapp.com/login",
          {
            email,
          }
        );
        localStorage.setItem("accesToken", data);
        // <===== store user to database ====>
        const res = await axios.put(
          `https://cryptic-fjord-80366.herokuapp.com/user/${email}`,
          {
            email: email,
          }
        );
        navigate(from);
      };
      userData();
    }
  }, [user]);
  return (
    <section id="home" class="banner_wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 header-img-section">
            <img src={login} class="img-fluid" alt="Banner" />
          </div>
          <div class="col-md-6 my-5 my-md-0 text-center text-md-start">
            <p class="banner-subtitle">Beanmi</p>
            <h1 class="banner-title">Login</h1>
            <form onSubmit={onSubmit}>
              <div class="mb-3">
                <p for="exampleInputEmail1" class="form-label">
                  Email address
                </p>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  name="email"
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
                  class="form-control"
                  name="pass"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="learn-more-btn-section">
                <button
                  type="submit"
                  class="nav-link learn-more-btn btn-header"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-1 d-flex justify-content-between">
              <p className="nav-link text-black">
                Dont have account! <Link to="/signup">Create account</Link>
              </p>
              <Link to="/signup"> Forgot Password</Link>
            </div>

            <button
              className="nav-link learn-more-btn mt-2 btn-extra-header"
              onClick={() => signInWithGoogle()}
            >
              <FaGoogle /> Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
