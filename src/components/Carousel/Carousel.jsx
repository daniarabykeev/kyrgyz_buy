import { Carousel } from "antd";
import React from "react";
import "./Carousel.css";

const CarouselHome = () => {
  return (
    <div className="carousel">
      <p className="carousel_title">
        Historical facts about our <span>products</span>
      </p>
      <Carousel autoplay className="carousel_inner">
        <div className="carousel_body">
          <img
            className="carousel_img"
            src="http://foto.kg/uploads/posts/2013-01/1357900950_1.jpg"
            alt="фото"
          />
          <h3 className="carousel_txt">
            According to one version, "Kambarkan" is considered to be the first
            melody created on the komuz. According to the story recorded by the
            Soviet musicologist V.S. Vinogradov from the words of the Kyrgyz
            folk musician Murataaly Kurenkeev, the hunter Kambar also stumbled
            upon dried guts that were stretched between trees and made beautiful
            sounds during the wind. was composed by the hunter and which was
            adopted from him by his children, grandchildren and
            great-grandchildren, still bears his name - "Kambarkan" to this day.
          </h3>
        </div>
        <div className="carousel_body">
          <img
            className="carousel_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCMAdH8OFHbHTGbd49O3ON3ssJa22weqBNipxJHBDEH_sNqrT_ILC1WvWwCO3TIHOzx3M&usqp=CAU"
            alt="фото"
          />
          <h3 className="carousel_txt">
            The nomadic way of life is reflected in the Kyrgyz clothes, features
            are visible various regions. Natural materials prevail: wool, felt,
            leather, coarse fabrics. The design uses ornaments and themes,
            inspired by nature and tribal traditions. Today at Kyrgyzstan wear
            modern Western clothes, but even in it there are traditional
            elements that the Kyrgyz are very proud of.
          </h3>
        </div>
        <div className="carousel_body">
          <img
            className="carousel_img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM2cBRMi74EZ-jdoTnj7qbUNFEtmeaOsIsMWgrTSLX3UhONxmjXg7oSpcV1n-1ZkbcNWc&usqp=CAU"
            alt="фото"
          />
          <h3 className="carousel_txt">
            The Kyrgyz temir-ooz-komuz by Kenchinbaev Orozobaya is a
            well-balanced, soft, professional instrument. The master is
            considered the best manufacturer of temir-komuz in Kyrgyzstan. His
            temir-komus has a moderately soft tongue, which gives warm, soft
            tops, and is easily controlled on breathing and tongue. Melodic,
            full-sounding very high quality instrument.
          </h3>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
