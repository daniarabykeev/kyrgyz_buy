import React, { useState } from "react";
import "./Visa.css";
import { useNavigate } from "react-router-dom";

const Visa = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const navigate = useNavigate();
  function click() {
    if (!name || !email || !address || !zip) {
      return alert("Заполните все поля");
    } else {
      alert("Оплата совершена");
      navigate("product");
    }
    navigate("/");
  }
  return (
    <div>
      <div>
        <div className="container form-payment">
          <form action="">
            <div className="row">
              <div className="col">
                <h3 className="title">Billing Adress</h3>
                <div className="inputBox">
                  <span>Full name:</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                  />
                </div>
                <div className="inputBox">
                  <span>email:</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                  />
                </div>
                <div className="inputBox">
                  <span>adress:</span>
                  <input
                    type="text"
                    placeholder="room - street"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="inputBox">
                  <span>city:</span>
                  <input type="text" placeholder="City/Town" />
                </div>
                <div className="flex">
                  <div className="inputBox">
                    <span>state:</span>

                    <input type="text" placeholder="Country" />
                  </div>
                  <div className="inputBox">
                    <span>zip code:</span>
                    <input
                      type="text"
                      placeholder="Country code"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <h3 className="title">payment</h3>
                <div className="inputBox form-input">
                  <span>card accepted:</span>
                  <img
                    className="img-form"
                    src="https://cdn-icons-png.flaticon.com/512/349/349221.png"
                    alt=""
                  />
                  <img
                    className="img-form"
                    src="https://cdn-icons-png.flaticon.com/512/196/196581.png"
                    alt=""
                  />
                  <img
                    className="img-form"
                    src="https://cdn-icons-png.flaticon.com/512/196/196565.png"
                    alt=""
                  />
                </div>
                <div style={{ marginTop: "50px" }} className="inputBox">
                  <span id="card-name">name on card:</span>
                  <input
                    style={{ width: "300px", marginLeft: "20px" }}
                    type="text"
                    placeholder="Your payment card"
                  />
                </div>
                <div className="inputBox">
                  <span id="card-name">credit card number:</span>
                  <div>
                    <input
                      style={{
                        width: "75px",
                        height: "45px",
                        marginLeft: "20px",
                      }}
                      id="inp"
                      type="text"
                      onKeyUp="testJump(this);"
                      maxLength="4"
                      size="1"
                      placeholder="XXXX"
                    />
                    <input
                      style={{
                        width: "75px",
                        height: "45px",
                      }}
                      id="inp"
                      type="text"
                      onKeyUp="testJump(this);"
                      maxLength="4"
                      size="1"
                      placeholder="XXXX"
                    />
                    <input
                      style={{
                        width: "75px",
                        height: "45px",
                      }}
                      id="inp"
                      type="text"
                      onKeyUp="testJump(this);"
                      maxLength="4"
                      size="1"
                      placeholder="XXXX"
                    />
                    <input
                      style={{
                        width: "75px",
                        height: "45px",
                      }}
                      id="inp"
                      type="text"
                      onKeyUp="testJump(this);"
                      maxLength="4"
                      size="1"
                      placeholder="XXXX"
                    />
                  </div>
                </div>
                <div className="inputBox">
                  <span id="card-name">exp month:</span>
                  <input
                    style={{ width: "300px", marginLeft: "20px" }}
                    type="text"
                    placeholder="January"
                  />
                </div>
                <div className="flex">
                  <div className="inputBox">
                    <span style={{ marginLeft: "50px" }}>exp year:</span>
                    <input
                      style={{ width: "90px", marginLeft: "30px" }}
                      type="number"
                      placeholder="2022"
                    />
                  </div>
                  <div className="inputBox">
                    <span>CVV:</span>
                    <input
                      style={{ width: "90px" }}
                      type="number"
                      placeholder="1234"
                    />
                  </div>
                </div>
              </div>
              <button onClick={click} className="btn">
                {" "}
                PAY
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Visa;
