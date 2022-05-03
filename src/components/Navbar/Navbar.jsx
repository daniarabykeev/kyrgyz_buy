import { Menu } from "antd";
import {
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect } from "react";
import "./Navbar.css";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

const Navbar = () => {
  const { user, checkAuth, logout } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const ADMIN_EMAIL = "main@user.com";
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  return (
    <div className="navbar">
      <div className="header_logo">
        <h1 className="logo_txt">
          {/* <Link to={'/'}> */}
            Kyrgyz<span>Buy</span>
          {/* </Link> */}
        </h1>
      </div>
      <div className="navbar__inner">
        <Menu
          style={{
            width: "100%",
            height: "80px",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            fontSize: "2rem",
            background: "none",
          }}
          mode="horizontal"
        >
          <Link to={"/"}>
            <Menu.Item style={{ color: "black", listStyle: "none" }}>
              Home
            </Menu.Item>
          </Link>
          <Link to={"/main"}>
            <Menu.Item style={{ color: "black", listStyle: "none" }}>
              Category
            </Menu.Item>
          </Link>
          <Link to={"/contacts"}>
            <Menu.Item style={{ color: "black", listStyle: "none" }}>
              Contacts
            </Menu.Item>
          </Link>

          {/* {user === ADMIN_EMAIL ? (
           
          ): null} */}
          <Link to={"/admin"}>
            <Menu.Item style={{ color: "black", listStyle: "none" }}>
              Admin
            </Menu.Item>
          </Link>

          <Link to={"/favorite"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<HeartOutlined />}
            ></Menu.Item>
          </Link>
          <Link to={"/cart"}>
            <Menu.Item
              style={{ color: "black", listStyle: "none" }}
              icon={<ShoppingOutlined />}
            ></Menu.Item>
          </Link>
        </Menu>
      </div>
    </div>
  );
};
// }

export default Navbar;
