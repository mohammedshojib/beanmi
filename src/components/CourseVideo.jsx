import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import ReactPlayer from "react-player";
import { FaPlayCircle } from "react-icons/fa";

const CourseVideo = () => {
  const [user, loading2, errorHook] = useAuthState(auth);
  const email = user?.email;
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://youtu.be/-UVWgDPvZ78");
  const [videos, setVideos] = useState(["https://youtu.be/-UVWgDPvZ78"]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://cryptic-fjord-80366.herokuapp.com/users`, {
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
    axios
      .get(`https://cryptic-fjord-80366.herokuapp.com/videos`)
      .then((response) => {
        setVideos(response.data);
      });
  }, []);

  const seturl = (url) => {
    setUrl(url);
  };
  console.log(url);
  return (
    <section id="home" class="banner_wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 header-img-section">
            <div className="mt-md-5 mt-0">
              <ReactPlayer width="100%" height="300px" controls url={url.url} />
              <p className="mt-2">Name: {url?.name}</p>
            </div>
          </div>
          <div class="col-md-6 my-5 my-md-0 text-md-start -mt-4">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Time</th>
                  <th scope="col">Play</th>
                </tr>
              </thead>
              <tbody>
                {videos.map((video) => (
                  <tr key={video._id}>
                    <th scope="row">
                      <FaPlayCircle />
                    </th>
                    <td>{video.name}</td>
                    <td>{video.length}</td>
                    <td>
                      <button
                        className="nav-link play-btn"
                        onClick={() => seturl(video)}
                      >
                        Play
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseVideo;
