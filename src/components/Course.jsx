import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import pay from "../assets/pay.svg";
import { FaCheckSquare } from "react-icons/fa";
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

    if (
      event.target.txid.value === "" ||
      event.target.sendernumber.value === "" ||
      methode === ""
    ) {
      toast.error("Must be fill all details");
    } else {
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
    }
  };

  return (
    <section id="home" class="banner_wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mt-0 mt-md-5">
            <h1 class="banner-title">Payment</h1>
            {methode === "rocket" ? (
              <div>
                <h4 className="fw-bold">
                  রকেট নাম্বারঃ 01646052260-5 (পারসোনাল)
                </h4>
                <h6 className="fw-bold">পেমেন্ট করার নিয়মঃ</h6>
                <ul>
                  <li>*322# ডায়াল করো বা রকেট মোবাইল অ্যাপ-এ যাও।</li>
                  <li>সেন্ড মানি অপশন সিলেক্ট করো।</li>
                  <li>আমাদের রকেট পারসোনাল নাম্বারঃ 016460522605 লিখো।</li>
                  <li>
                    টাকার পরিমানঃ <b>5500</b>
                  </li>
                  <li>রেফারেন্সঃ তোমার নাম</li>
                  <li>তোমার পিন নাম্বার দিয়ে পেমেন্ট কমপ্লিট করো</li>
                  <li>
                    যে নাম্বার থেকে রকেট করেছ তা এবং ট্রানজেকশন আইডি/TrxID,
                    উপরের ফর্মে ফিলাপ করে দাও।
                  </li>
                </ul>
              </div>
            ) : methode === "nagad" ? (
              <div>
                <h4 className="fw-bold">নগদ নাম্বারঃ 01646052260 (পারসোনাল)</h4>
                <h6 className="fw-bold">পেমেন্ট করার নিয়মঃ</h6>
                <ul>
                  <li>*167# ডায়াল করো বা নগদ মোবাইল অ্যাপ-এ যাও।</li>
                  <li>সেন্ড মানি অপশন সিলেক্ট করো।</li>
                  <li>আমাদের নগদ পারসোনাল নাম্বারঃ 01646052260 লিখো।</li>
                  <li>
                    টাকার পরিমানঃ <b>5500</b>
                  </li>
                  <li>রেফারেন্সঃ তোমার নাম</li>
                  <li>তোমার পিন নাম্বার দিয়ে পেমেন্ট কমপ্লিট করো</li>
                  <li>
                    যে নাম্বার থেকে নগদ করেছ তা এবং ট্রানজেকশন আইডি/TrxID, উপরের
                    ফর্মে ফিলাপ করে দাও।
                  </li>
                </ul>
              </div>
            ) : (
              <div>
                <h4 className="fw-bold">
                  বিকাশ নাম্বারঃ 01401052260 (পারসোনাল)
                </h4>
                <h6 className="fw-bold">পেমেন্ট করার নিয়মঃ</h6>
                <ul>
                  <li>*247# ডায়াল করো বা বিকাশ মোবাইল অ্যাপ-এ যাও।</li>
                  <li>সেন্ড মানি অপশন সিলেক্ট করো।</li>
                  <li>আমাদের বিকাশ পারসোনাল নাম্বারঃ 01401052260 লিখো।</li>
                  <li>
                    টাকার পরিমানঃ <b>5500</b>
                  </li>
                  <li>রেফারেন্সঃ তোমার নাম</li>
                  <li>তোমার পিন নাম্বার দিয়ে পেমেন্ট কমপ্লিট করো</li>
                  <li>
                    যে নাম্বার থেকে বিকাশ করেছ তা এবং ট্রানজেকশন আইডি/TrxID,
                    উপরের ফর্মে ফিলাপ করে দাও।
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div class="col-md-6 mt-5 mt-md-6  text-start">
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
                  Account No.
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
              <div className="d-flex justify-content-between border-top mt-3 border-dark">
                <h4 className="mt-3 fw-bold">Total</h4>
                <h4 className="mt-3 fw-bold">5500</h4>
              </div>
              <div class="learn-more-btn-section">
                <button
                  type="submit"
                  class="nav-link learn-more-btn btn-header"
                  // disabled={methode == ""}
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
