import React from "react";
import learn from "../assets/learn.svg";
import faqimg from "../assets/faq.svg";
import hero2 from "../assets/hero2.svg";
import hero3 from "../assets/hero3.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="main" class="banner_wrapper">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 ">
              <img src={learn} class="img-fluid" alt="Banner" />
            </div>
            <div class="col-md-6 my-5 my-md-0 text-center text-md-start">
              <p class="banner-subtitle">
                Complete Buissness Development course
              </p>
              <h1 class="banner-title">
                Start <span>Beanmi</span> to change your life
              </h1>
              <h4 class="font-weight-bold">৳ 4990</h4>
              <p class="banner-title-text">
                Everythink you need to start a online buissness
              </p>
              <div class="learn-more-btn-section">
                <Link class="nav-link learn-more-btn btn-header" to="/course">
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" class="features_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center mb-5">
              <p class="features_subtitle">Lets start a another journey</p>
              <h2 class="features_title">এই কোর্স থেকে কি কি শিখতে পারবে:</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="ft-1">
                <h3>Marketing</h3>
                <p class="features_text">
                  6 ways of marketing, free matketing, paid marketing, meme
                  marketing, influencer marketing, pre forced marketing, free
                  influencer marketing,
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="ft-2">
                <h3>F-Commerce</h3>
                <p class="features_text">
                  We will be teach you how to create F-Commerce (A to Z) and
                  Good Looking trusted f-commerce included advanced way +
                  resources
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="ft-3">
                <h3>Basic web Development</h3>
                <p class="features_text">
                  Basics of web application and how to create ecommerce web with
                  wordpress(live project). For mobile user we will give you PHP
                  Script
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="ft-4">
                <h3>Basic Degining</h3>
                <p class="features_text">
                  Basic degining with canva and photopea (enough amount for
                  start a buissness) product degine, logo degine, background
                  resources
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="ft-5">
                <h3>Product Researching</h3>
                <p class="features_text">
                  We will be teach you How to find best product for coustomer
                  and How to find the product included supplier information
                </p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-5">
              <div class="ft-6">
                <h3>Live Projects</h3>
                <p class="features_text">
                  In this course we will be build buissness 0 to start making
                  money, a live projects where you will be learn everythink
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="about_wrapper">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-12 col-lg-5 text-center text-lg-start">
              <p class="about_number">1</p>
              <h2 class="about_title">Learn Something Great</h2>
              <p class="about_text">
                Beanmi is great learning plateform for building a great
                lifestyle
              </p>
              <div class="my-5">
                <a class="learn-more-btn" href="#innovate">
                  Login Now
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-lg-7 text-center text-md-start">
              <img src={hero2} class="img-fluid" />
            </div>
          </div>
        </div>

        <div class="innovate mt-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-lg-6 px-5 text-center text-md-start">
                <img src={hero3} class="img-fluid" />
              </div>
              <div class="col-sm-12 col-lg-6 text-center text-lg-start">
                <p class="about_number">2</p>
                <h2 class="about_title">
                  Master everything you need to become a Game changer
                </h2>
                <p class="about_text">Live projects in our all courses</p>
                <div class="mt-5">
                  <a class="learn-more-btn btn-header" href="#">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" class="faq_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center mb-5">
              <p class="faq_subtitle">We're here to help</p>
              <h2 class="faq_title">Frequently asked questions</h2>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-sm-12 col-lg-8 mb-5 mb-lg-0">
              <div class="accordion accordion-flush" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      1. এই কোর্স কাদের জন্য?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      যারা একটি বিজনেস স্টার্ট করতে চায়। অথবা মার্কেটিং শিখে
                      একটা মার্কেটিং এজেঞ্চি স্টার্ট করতে / এজেঞ্চিতে মার্কেটার
                      হিসেবে জব করতে চাই তাদের জন্য। 😀
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. এই কোর্স শুরু করার আগে আমার কী কী পূর্ব অভিজ্ঞতা থাকা
                      দরকার?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      আমরা যেহেতু একদম শূন্য থেকে শেখাচ্ছি। তাই তোমাকে আগে থেকে
                      তেমন কিছু জানা লাগবে না। তবে তোমার হাতে যদি সময় থাকে তাহলে
                      এই তিনটা কাজ করে ফেলতে পারো। ১. ভিডিও দেখে দেখে জিনিসগুলো
                      মাথায় ঢুকানোর জন্য একটুখানি ব্রেনের খালি জায়গা রাখতে হবে।
                      ২. কোর্স এ জয়েন করলেই অটো সব হয়ে যাবে না। হার্ডওয়ার্ক
                      করার, লেগে থাকার মেন্টালিটি থাকতে হবে। ৩. কোথাও আটকে গেলে
                      হেল্প চাওয়ার মেন্টালিটি এবং লেগে থাকার ইচ্ছা রাখতে হবে।
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. কোর্সের মধ্যে কী কী আছে ?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      মার্কেটিং এর ৬-৮ টা ডিফারেন্ট আইডিয়া নিএ কাজ করব। বেসিক
                      গ্রাফিক ডিজাইন, বেসিক ওয়েব ডেভেলপমেন্ট, Facebook
                      মার্কেটিং, ইনফ্লুয়েঞ্চার মার্কেটিং, প্রডাক্ট কোন জাইগা
                      থেকে পাবেন কোন প্রডাক্ট টা কাস্টমার দের জন্য ভালো হবে মোট
                      কথা একটা বিজনেস স্টার্ট করতে যা যা লাগে সব কিছু শিখানো
                      হবে।
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      4. কোর্সের ভিডিও গুলো কিভাবে পাবো?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      কোর্সের ভিডিও গুলো প্রি-রেকর্ড থাকবে। তুমি একাউন্ট খুলে এই
                      কোর্সে এনরোল করলে। ভিডিওগুলো কোর্স শুরু হওয়ার পরে থেকে
                      প্রতিদিন একটা করে মডিউল দেয়া হবে। প্রত্যেকটা মডিউলে সাধরনত
                      ১ থেকে ৩ ঘন্টার ভিডিও থাকে। তুমি চাইলে শুয়ে-বসে,
                      দাঁড়িয়ে-হেলিয়ে, পা দুলিয়ে, কোমর নাচিয়ে, কিংবা খাটের তলায়
                      লুকিয়েও ভিডিও দেখতে পারবে।
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      5. এই কোর্স কমপ্লিট করতে কতদিন সময় লাগবে?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      তুমি যদি প্রতিদিন ১ থেকে দেড় ঘন্টা ধরে ভিডিও দেখো, তার
                      সাথে সাথে এক্সট্রা ৪ থেকে ৬ ঘন্টা প্রাকটিস করো, তাহলে
                      তোমার ১ থেকে ৩ মাসের মতো সময় লাগবে। হার্ডওয়ার্ক করার
                      মেন্টালিটি নিয়ে আসতে হবে। ফাঁকিবাজি বা শর্টকাট করার কোন
                      উপায় নাই।
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFive">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      6. কোর্সটি করতে শিক্ষাগত ব্যাকগ্রাউন্ড কেমন থাকা লাগবে?
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading6"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      আমরা কোর্সটি এমনভাবে সাজিয়েছি যেখানে একাডেমিক
                      ব্যাকগ্রাউন্ড ম্যাটার করে না। তুমি যেকোনো একাডেমিক
                      ব্যাকগ্রাউন্ড থেকে এই কোর্সটি করতে পারবে। চাইলে ভার্সিটির
                      স্টুডেন্ট, কলেজের স্টুডেন্ট, চাকরিজীবি, বেকার, প্রেমিক,
                      পলাতক প্রেমিক, এমনকি ফোন ধরে না এমন প্রেমিকা সবাই যাতে
                      শিখতে পারে সেজন্য একদম শূন্য থেকে শুরু করা হয়েছে। তবে
                      অবশ্যই সময় দিতে হবে ৫-৮ ঘন্টা। মিনিমাম ৩-৫ ঘন্টা।
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading7">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      7. আমার কি কি জিনিস লাগবে?
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading7"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      প্রথমত লাগবে ডেডিকেটেড সময়। প্রতিদিন মাস্ট ৩-৫ ঘন্টা।
                      সম্ভব হলে ৬-৮ঘন্টা( সময় না দিতে পারলে। হার্ডওয়ার্ক করার
                      ইচ্ছা না থাকলে কোর্সে এনরোল করে কোন লাভ হবে না।) দ্বিতীয়ত
                      লাগবে একটা ল্যাপটপ/কম্পিউটার বা একটা মোবাইল (তবে মোবাইল এর
                      খেএে বেশিরভাগ কাজ করতে অনেক কস্ট হবে তাই আমি বলব একটা
                      ল্যাপটপ/কম্পিউটার হলেই ভালো অথবা চাইলে দিয়ে ও মোবাইল করা
                      যাবে ) আর তৃতীয়ত লাগবে ভালো ইন্টারনেট।
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading8">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="false"
                      aria-controls="collapse8"
                    >
                      8.কোর্সটি করলেই কি টাকা ইনকাম করা যাবে?
                    </button>
                  </h2>
                  <div
                    id="collapse8"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading8"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      নাহ | কোর্সটি করলেই টাকা ইনকাম করা যাবে তার কোনো
                      গ্যারান্টি নাই | তবে যদি হার্ডওয়ার্ক কর তাহলেই অবশ্যই
                      একদিন নিজের অনলাইন বিজনেস / কোনো ভালো মার্কেটিং কোম্পানিতে
                      জব / freelancer হিসেবে কাজ করতে পারবে |
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-12 col-lg-4">
              <img src={faqimg} class="img-fluid" />
            </div>
          </div>
        </div>

        <div class="free_trial">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-12 col-lg-6 text-center text-lg-start">
                <h2 class="free_title">Ready to Chang the game</h2>
              </div>
              <div class="col-sm-12 col-lg-6 text-center text-lg-end mt-4 mt-lg-0">
                <a class="learn-more-btn" href="#main">
                  <i class="fa fa-rocket" aria-hidden="true"></i> Enroll
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
