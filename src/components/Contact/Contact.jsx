import React from "react";
import "boxicons";
import "./Contact.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar2/Navbar2";

const Contact = () => {
  const navigate = useNavigate();

  function click() {
    navigate("/");
    setTimeout(() => {
      alert("Сообщение отправлено!");
    }, 500);
  }
  return (
    <div className="bg-for-contacts">
      
      <Navbar />
        <Navbar2/>  
      <div>
      
        <section className="contact">
        
          <div className="content">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="container-cnt">
            <div className="contactInfo">
              <div className="box">
                <div className="icon">
                  <box-icon type="solid" name="map"></box-icon>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p> Bishkek Kyrgyzstan</p>
                </div>
              </div>

              <div className="box">
                <div className="icon">
                  <box-icon type="solid" name="phone"></box-icon>
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>0557777777</p>
                </div>
              </div>
              <div className="box">
                <div className="icon">
                  <box-icon type="solid" name="envelope"></box-icon>{" "}
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>kyrgyzbuy@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="contactForm">
              <form action="">
                <h2 style={{ color: "black" }}>Send Message</h2>
                <div className="inputBox">
                  <input
                    // style={{ width:  }}
                    type="text"
                    required="required"
                    placeholder="Full Name"
                  />
                </div>
                <div className="inputBox">
                  <input type="text" required="required" placeholder="Email" />
                </div>
                <div className="inputBox">
                  <textarea required="required"></textarea>
                  <span style={{ color: "black" }}>Type your Massege... </span>
                </div>
                <div style={{ display: "flex" }}>
                  <button onClick={click} class="floating-button">
                    Send
                  </button>
                  <button onClick={() => navigate("/")} class="floating-button">
                    Go home
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
