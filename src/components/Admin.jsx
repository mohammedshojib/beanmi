import React from "react";
import videoup from "../assets/video-up.svg";
import videos from "../assets/videos.svg";
import users from "../assets/users.svg";
import orders from "../assets/orders.svg";

const Admin = () => {
  return (
    <section id="features" class="features_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6 mb-5 text-center">
            <div class="ft-1">
              <img style={{ width: "100px" }} src={videoup} alt="" />
              <h3 className="mt-2">Upload Video</h3>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-5 text-center">
            <div class="ft-2">
              <img style={{ width: "120px" }} src={videos} alt="" />
              <h3 className="mt-4">Videos</h3>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-5 text-center">
            <div class="ft-3">
              <img style={{ width: "100px" }} src={users} alt="" />
              <h3 className="mt-2">Users</h3>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-5 text-center">
            <div class="ft-4">
              <img style={{ width: "120px" }} src={orders} alt="" />
              <h3 className="mt-2">Orders</h3>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-5 text-center">
            <div class="ft-5">
              <img style={{ width: "100px" }} src={videoup} alt="" />
              <h3 className="mt-2">Coming soon</h3>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6 mb-5 text-center">
            <div class="ft-6">
              <img style={{ width: "100px" }} src={videoup} alt="" />
              <h3 className="mt-2">Coming soon</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
