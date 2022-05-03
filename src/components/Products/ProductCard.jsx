import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./ProductCard.css";
import { Card, Rate } from "antd";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import { favoriteContext } from "../../context/favoriteContext";
const { Meta } = Card;

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const { addProductToFavorite, checkItemInFavorite } =
    useContext(favoriteContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  const [checkItemX, setCheckItemX] = useState(checkItemInFavorite(item.id));
  const navigate = useNavigate();
  console.log(item);
  return (
    <div>
      <Card
        style={{ margin: "10px" }}
        className="product_card"
        hoverable
        cover={
          <img
            className="product_card_img"
            alt="example"
            src={"http://52.91.106.90" + item.image}
          />
        }
      >
        <Meta title={item.title} description={item.text} />
        <p>{item.price}$</p>

        <div className="card_icons1">
          <Rate allowHalf defaultValue={2.5} />
          <EllipsisOutlined onClick={() => navigate(`/product/${item.id}`)} />
        </div>
        <div className="product_card_icons">
          <HeartOutlined
            className="product_card_icon1"
            style={{ fontSize: "25px", color: checkItemX ? "red" : "white" }}
            onClick={() => {
              addProductToFavorite(item);
              setCheckItemX(checkItemInFavorite(item.id));
            }}
          />

          <ShoppingCartOutlined
            className="product_card_icon1"
            style={{ fontSize: "25px", color: checkItem ? "red" : "white" }}
            onClick={() => {
              addProductToCart(item);
              setCheckItem(checkItemInCart(item.id));
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
