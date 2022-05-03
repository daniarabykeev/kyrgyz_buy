import React from "react";
import Navbar from "../Navbar/Navbar";
import { Card } from "antd";
import "./Main.css";
import { Link } from "react-router-dom";

const { Meta } = Card;

const Main = () => {
  return (
    <div>
      <Navbar />

      <div className="main_title">
        <h2>
          The culture of Kyrgyzstan was formed under the strong influence of
          nomadic life. In addition, it was influenced by the cultures of
          Russia, Persia and Turkey, and yet it remained quite original and
          unique. The connection of Kyrgyz culture with nature can be traced
          everywhere: from design, clothes to music.
        </h2>
        <img
          className="main_vacine"
          src="https://www.quasarex.com/wp-content/uploads/2021/09/we-are-fully-vaccinated-badge.png"
          alt=""
        />
      </div>

      <div className="main-container">
        <div className="main-cards">
          <Link to="/music">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={
                <img
                  className="main_img"
                  style={{ height: "350px" }}
                  alt="example"
                  src="http://st-1.akipress.org/127/.storage/limon2/images/february2015/aea5f8bb7a5b50476c0bd49e6538efaa.jpg"
                />
              }
            >
              <Meta
                title="Musical instruments"
                description="variety of sounds"
              />
            </Card>
          </Link>
        </div>

        <div className="main-cards">
          <Link to="/clothes">
            {" "}
            <Card
              hoverable
              style={{ width: 280 }}
              cover={
                <img
                  className="main_img"
                  style={{ height: "350px" }}
                  alt="example"
                  src={
                    "https://en.unesco.org/silkroad/sites/default/files/photogallery/kyrgyzstan_kyrgyz_woman_traditional_costume.jpg"
                  }
                />
              }
            >
              <Meta title="Nomads clothes" description="exquisite outfits" />
            </Card>
          </Link>
        </div>

        <div className="main-cards">
          <Link to="/interior">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={
                <img
                  className="main_img"
                  style={{ height: "350px" }}
                  alt="example"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA25qt7_bvdgvG_Ql9dRVsq9GmTVJlEezhQw&usqp=CAU"
                />
              }
            >
              <Meta title="Interior" description="felt products" />
            </Card>
          </Link>
        </div>

        <div className="main-cards">
          <Link to="/tours">
            <Card
              hoverable
              style={{ width: 280 }}
              cover={
                <img
                  className="main_img"
                  style={{ height: "350px" }}
                  alt="example"
                  src={
                    "https://triptokyrgyzstan.com/sites/default/files/styles/flyout/public/2019-01/tyan-shan_c_korjonov_daniil.jpg.webp?itok=6mXR9cOe"
                  }
                />
              }
            >
              <Meta title="Top tours" description="crazy views" />
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
