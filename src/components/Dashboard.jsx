import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import learn from "../assets/learn.svg";
import err from "../assets/err.svg";
import auth from "../firebase.init";

const Dashboard = () => {
  const [user, loading2, errorHook] = useAuthState(auth);
  const email = user?.email;
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cryptic-fjord-80366.herokuapp.com/users`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
        },
      })
      .then((response) => {
        const myUser = response.data.filter((user1) => user1?.email == email);
        setData(myUser);
      });
    axios
      .get(`https://cryptic-fjord-80366.herokuapp.com/orders`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
        },
      })
      .then((response) => {
        const orders = response.data.filter(
          (user2) => user2?.orders?.email == email
        );
        setOrders(orders);
      });
  }, []);

  return (
    <>
      {data[0]?.enrolled ? (
        <div className="card-c">
          <h1 className="mb-2 text-center">Your Courses</h1>
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top mt-2" src={learn} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Buissness</h5>
              <p class="card-text">Complete Buisness development course</p>
              <Link
                to="/course-video"
                class="nav-link learn-more-btn btn-header"
              >
                Watch Video
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="card-c text-center">
          <h1 className="mb-2 ">No Courses Found</h1>
          {orders.map((od, index) => (
            // console.log(od)
            <p key={index}>
              {" "}
              <b>course name:</b> {od?.orders?.name} <b>Payment:</b>{" "}
              {od?.orders?.pay}
            </p>
          ))}
          <img src={err} className="w-25" alt="" />
          <div class="learn-more-btn-section">
            <Link
              class="nav-link learn-more-btn btn-header"
              to="/course-details"
            >
              Enroll
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
