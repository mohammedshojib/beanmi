import React from "react";

const Footer = () => {
  return (
    <section id="contact" class="footer_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 mb-4 mb-lg-0">
            <h3 className="footer_title">Beanmi</h3>
            <p class="footer_text">
              Beanmi maked first buissness development course in bangladesh.
            </p>
          </div>
          <div class="col-lg-4 px-lg-5 mb-4 mb-lg-0">
            <h3 class="footer_title">Contact</h3>
            <p class="footer_text">
              <a href="#">asmdshojib11@gmail.com</a>
              <br />
              <a href="#" class="footer-address">
                Nazir road <br />
                Feni sadar feni
              </a>
            </p>
          </div>
          <div class="col-lg-3 mb-4 mb-lg-0">
            <h3 class="footer_title">Social Media</h3>
            <p>
              <a href="#" class="footer_social_media_icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="footer_social_media_icon">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="footer_social_media_icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="footer_social_media_icon">
                <i class="fab fa-dribbble"></i>
              </a>
            </p>
          </div>
          <div class="col-12 footer_credits text-center">
            <span>
              © 2021
              <a href="#" target="_blank" title="Code4education">
                SHOJIB
              </a>
              ™. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
