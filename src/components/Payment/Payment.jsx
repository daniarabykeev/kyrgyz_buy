import { Button } from "antd";
import React from "react";
import {useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Payment.css";
import order from "./sources/order.png"

const Payment = () => {
    const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="order-page">
        <div className="order-box">
            <img id="order" src={order} alt="" />
        </div>
        <Button id="btn-order" onClick={() => navigate("/")}>
                Continue Shopping
              </Button>
      </div>
    </>
  );
};

export default Payment;
