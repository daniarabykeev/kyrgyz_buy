import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import Navbar from "../Navbar/Navbar";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuthContext();
  // console.log(email, password)

  function handleLogin(email, password) {
    signIn(email, password, navigate);
  }
  return (
    <div className="signin_bg">
      <Navbar />
      <div className="signIn">
        <h1>Login</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          autoComplete="off"
        >
          <Form.Item
            label="E-mail"
            name="email"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              style={{ width: "100%" }}
              onClick={() => handleLogin(email, password)}
              type="primary"
            >
              Sign In
            </Button>
            Don't have an account? <button onClick={() => navigate("/signup")}>Register</button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
