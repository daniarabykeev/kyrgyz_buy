import { Button, InputNumber, List } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import Navbar from "../Navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);
  const navigate = useNavigate();
  useEffect(() => {
    getCart();
  }, []);
  // console.log(cart);
  return (
    <>
      <Navbar />
      <div style={{}} className="products-total1">
        <List
          itemLayout="horizontal"
          dataSource={cart.products}
          footer={
            <div>
              <h1>Total: {cart.totalPrice}$</h1>
              <Button id="btn-order1" onClick={() => navigate("/visa")}>
                Order
              </Button>
            </div>
          }
          renderItem={(item) => (
            <List.Item className="products-in-cart">
              <List.Item.Meta
                title={
                  <div>
                    <div>
                      <h2>{item.item.title}</h2>
                    </div>

                    <div>
                      <h3>{"$" + item.item.price}</h3>
                    </div>
                  </div>
                }
                description={
                  <>
                    <div className="cart-imgdes">
                      <img
                        className="imageCart"
                        src={"http://52.91.106.90" + item.item.image}
                        alt="img"
                      />
                      <div className="cart-description">
                        <div className="aaa">{item.item.title}</div>
                        <div className="cart-sub-price">
                          <h4>SubPrice</h4>
                          <h3>{"$" + item.subPrice}</h3>
                        </div>
                        <div className="quantity">
                          <h4>Quantity</h4>
                          <Button
                            onClick={() =>
                              changeProductCount(item.count - 1, item.item.id)
                            }
                          >
                            -
                          </Button>
                          <InputNumber disabled value={item.count} />
                          <Button
                            onClick={() =>
                              changeProductCount(item.count + 1, item.item.id)
                            }
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div></div>
                    <Button
                      style={{ width: "25vw", backgroundColor: "grey" }}
                      onClick={() => deleteFromCart(item.item.id)}
                    >
                      Remove from cart
                    </Button>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default Cart;
