import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import ReactPlayer from "react-player";

const CourseVideo = () => {
  const [user, loading2, errorHook] = useAuthState(auth);
  const email = user?.email;
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
        },
      })
      .then((response) => {
        const myUser = response.data.filter((user1) => user1?.email == email);
        if (myUser[0]?.enrolled) {
          setData(myUser);
        } else {
          navigate("/");
          toast.error("you are not enrolled");
        }
      });
  }, []);
  return (
    <section id="home" class="banner_wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 header-img-section">
            <ReactPlayer
              width="500px"
              height="300px"
              controls
              url="https://youtu.be/-UVWgDPvZ78"
            />
          </div>
          <div class="col-md-6 my-5 my-md-0 text-center text-md-start">
            <p class="banner-subtitle">Video upload start in 10 jun</p>
            <h1 class="banner-title">
              Welcome to <span>Buissness</span> Development course
            </h1>
            <p class="banner-title-text">Plz wait for 10 jun</p>
            {/* <div class="learn-more-btn-section">
              <Link
                class="nav-link learn-more-btn btn-header"
                to="/course-details"
              >
                Dashboard
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseVideo;
