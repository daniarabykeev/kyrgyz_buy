import { Button, Card, Carousel, Col, List } from "antd";
import React, { useContext, useEffect } from "react";
import { favoriteContext } from "../../context/favoriteContext";
import Navbar from "../Navbar/Navbar";
import "./Favorite.css";

const { Meta } = Card;
const Favorite = () => {
  const { getFavorite, favorite, deleteFromFavorite } =
    useContext(favoriteContext);
  useEffect(() => {
    getFavorite();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <div style={{ display: "flex" }}>
          <div>
            <List
              itemLayout="vertical"
              dataSource={favorite.products}
              renderItem={(item) => (
                <Card hoverable style={{ maxWidth: 400, margin: "10px 0" }}>
                  <img
                    className="imageCart"
                    src={"http://52.91.106.90" + item.item.image}
                    alt="img"
                    style={{ width: "270px" }}
                  />
                  <h3>{item.item.title}</h3>
                  <div>{item.item.text}</div>
                  <Button onClick={() => deleteFromFavorite(item.item.id)}>
                    Remove from favorite
                  </Button>
                </Card>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
