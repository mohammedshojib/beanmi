import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import pay from "../assets/pay.svg";
import auth from "../firebase.init";

const Course = () => {
  const [user, loading, errorHook] = useAuthState(auth);
  const navigate = useNavigate();
  const email = user?.email;
  const handleOrder = (event) => {
    event.preventDefault();

    const order = {
      username: event.target.name.value,
      email: email,
      name: "Buisness",
      pay: "process",
      amount: 4990,
      methode: event.target.methode.value,
      txid: event.target.txid.value,
      number: event.target.number.value,
      senderNumber: event.target.sendernumber.value,
    };
    console.log(order);
    const url = "https://cryptic-fjord-80366.herokuapp.com/orders";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Order placed successfully wait 30 min");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <section id="home" class="banner_wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mt-5">
            <img src={pay} class="img-fluid" alt="Banner" />
          </div>
          <div class="col-md-6 my-5 my-md-0 text-center text-md-start">
            <h1 class="banner-title">Payment</h1>
            <p>
              বিকাশে পেমেন্ট করার পর আপনার নম্বর এবং ট্রানজেকশন আইডি দিয়ে
              প্যামেন্ট কনফার্ম করুন। Total amount you need to send us at ৳ 4990{" "}
              <br /> bKash Personal Number : 017XXXXXX
            </p>
            <form onSubmit={handleOrder}>
              <div class="mb-1">
                <p for="exampleInputEmail1" class="form-label">
                  Name
                </p>
                <input
                  type="name"
                  class="form-control rounded"
                  id="exampleInputEmail1"
                  name="name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label">
                  Phone number
                </label>
                <input
                  type="number"
                  class="form-control rounded"
                  name="number"
                  id="exampleInputPassword1"
                />
              </div>{" "}
              <label for="exampleInputPassword1" class="form-label">
                Payment Method
              </label>
              <select name="methode" className="form-select">
                <option selected>Bkash</option>
                <option>Nagad</option>
                <option>Rocket</option>
              </select>
              <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label">
                  Sender number
                </label>
                <input
                  type="number"
                  class="form-control rounded"
                  name="sendernumber"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label">
                  TXID
                </label>
                <input
                  type="text"
                  class="form-control rounded"
                  name="txid"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="learn-more-btn-section">
                <button
                  type="submit"
                  class="nav-link learn-more-btn btn-header"
                >
                  Enroll
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
