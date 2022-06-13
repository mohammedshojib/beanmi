import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import pay from "../assets/pay.svg";
import auth from "../firebase.init";

const Course = () => {
  const [user, loading, errorHook] = useAuthState(auth);
  const navigate = useNavigate();
  const email = user?.email;
  const [methode, setMethode] = useState("");
  const [methodedata, setMethodedata] = useState("");

  const handleOrder = (event) => {
    event.preventDefault();

    const order = {
      methode: methode,
      email: email,
      name: "Buisness",
      pay: "process",
      amount: 4990,
      txid: event.target.txid.value,
      senderNumber: event.target.sendernumber.value,
    };
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
    console.log(order);
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
              বিকাশ নাম্বারঃ 013XXXXXXX (মার্চেন্ট অ্যাকাউন্ট) <br /> পেমেন্ট
              করার নিয়মঃ *247# ডায়াল করো বা বিকাশ মোবাইল অ্যাপ-এ যাও। পেমেন্ট
              অপশন সিলেক্ট করো। আমাদের বিকাশ মার্চেন্ট নাম্বারঃ 013XXXXXXX লিখো।
              টাকার পরিমানঃ 5500 রেফারেন্সঃ তোমার নাম কাউন্টার নাম্বারঃ 1 তোমার
              পিন নাম্বার দিয়ে পেমেন্ট কমপ্লিট করো যে নাম্বার থেকে বিকাশ করেছ তা
              এবং ট্রানজেকশন আইডি/TrxID, উপরের ফর্মে ফিলাপ করে দাও। ট্রানজেকশন
              আইডি/TrxID দেওয়ার সময় অবশ্যই ভাল করে খেয়াল করে, জিরো '0', ইংরেজি ও
              'o', ইংরেজি বড় হাতে অক্ষর আই 'I' ও ইংরেজি ছোট হাতে অক্ষর এল 'l'
              দেখে দিবে। সাধারন ভাবে ট্রানজেকশন আইডি/TrxID বড় হাতে অক্ষরে দেওয়া
              থাকে ।
            </p>
            <form>
              <h6 className="fw-bold h5">Select your payment system</h6>
              <input
                type="radio"
                id="bkash"
                name="fav_language"
                value="bkash"
                className="mt-3"
                onClick={() => setMethode("bkash")}
              />
              <label for="bkash" className="ms-1 fw-bold">
                Bkash
              </label>
              <input
                type="radio"
                id="nagad"
                name="fav_language"
                className="ms-4"
                value="nagad"
                onClick={() => setMethode("nagad")}
              />
              <label for="nagad" className="ms-1 fw-bold">
                Nagad
              </label>
              <input
                type="radio"
                id="rocket"
                name="fav_language"
                value="rocket"
                className="ms-4"
                onClick={() => setMethode("rocket")}
              />
              <label for="rocket" className="ms-1 fw-bold">
                Rocket
              </label>
            </form>
            <form onSubmit={handleOrder}>
              <div class="mb-1">
                <label for="exampleInputPassword1" class="form-label mt-3">
                  bKash No.
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
                  TrxID
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
