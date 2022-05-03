import React from "react";

import "boxicons";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="l-footer">
          <h1 className="footer_logo">
            KYRGYZ<span>BUY</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            atque recuasdsansdgsddae in sit sunt molestiae aliquid fugit. Mollitia eaque
            tempore iuwwre sit nobis? Vitae nexamo, optifdsfsdfo maiores numquam quisddd
            recusandae.
          </p>
        </div>
        <ul class="r-footer">
          <li>
            <h2 style={{ color: "white" }}>Social</h2>
            <ul class="box">
              <li>
                <p>Facebook</p>
              </li>
              <li>
                <p>Twitter</p>
              </li>
              <li>
                <p>Pinterest</p>
              </li>
              <li>
                <p>Dribbble</p>
              </li>
            </ul>
          </li>
          <li class="features">
            <h2 style={{ color: "white" }}>Information</h2>
            <ul class="box h-box">
              <li>
                <p>Blog</p>
              </li>
              <li>
                <p>Pricing</p>
              </li>
              <li>
                <p>Sales</p>
              </li>
              <li>
                <p>Tickets</p>
              </li>
              <li>
                <p>Certifications</p>
              </li>
              <li>
                <p>Customer Service</p>
              </li>
            </ul>
          </li>
          <li>
            <h2 style={{ color: "white" }}>Legal</h2>

            <ul class="box">
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Terms of Use</p>
              </li>
              <li>
                <p>Contract</p>
              </li>
            </ul>
          </li>
        </ul>
        <div class="b-footer">
          <p>All rights reserved by ©CompanyName 2020 </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
