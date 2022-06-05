import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/error.svg";

const NotFound = () => {
  return (
    <section id="home" class="banner_wrapper">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 header-img-section">
            <img src={error} class="img-fluid" alt="Banner" />
          </div>
          <div class="col-md-6 my-5 my-md-0 text-center text-md-start">
            <p class="banner-subtitle">Beanmi</p>
            <h1 class="banner-title">
              Oops <span>404</span> not found
            </h1>
            <p class="banner-title-text">
              This page not found maybe this page comming soon
            </p>
            <div class="learn-more-btn-section">
              <Link class="nav-link learn-more-btn btn-header" to="/">
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
