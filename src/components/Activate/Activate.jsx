import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
// import logo from "../Sign In/img/icon.svg";
// import { useAuthContext } from "../../contexts/authContext";

const Activate = () => {
  const { activateAcc } = useAuthContext();
  const [email, setEmail] = useState("");
  const [activate, setActivate] = useState("");
  const navigate = useNavigate();

  function handelActivate() {
    activateAcc(email, activate, navigate);
    console.log();
  }
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "50vw",
            margin: "20vh auto",
            textAlign: "center",
          }}
        >
          <h1 className="signin-up">Activate account</h1>

          <Form.Item
            label="email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="code"
            name="code"
            rules={[{ required: true, message: "Please input your code!" }]}
          >
            <Input
              onChange={(e) => setActivate(e.target.value)}
              value={activate}
            />
          </Form.Item>
          <Link to="/signin">
            <Button
              variant="contained"
              className="signin-btn"
              onClick={() => handelActivate()}
            >
              Activate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Activate;
