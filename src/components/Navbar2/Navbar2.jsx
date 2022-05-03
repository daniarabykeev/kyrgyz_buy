import { UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import "./Navbar2.css";

const Navbar2 = () => {
  const { user, checkAuth, logout } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);
  return (
    <div>
      <div className="user-info">
        
        {user ? (
        <h2 style={{ display: "flex" }}>
          {user} <button className="nav2-btn" onClick={logout} style={{marginLeft:"15px", marginRight:"45px"}}>Logout</button>
        </h2>
         ) : location.pathname === "/signup"
         ? (
        <button onClick={() => navigate("/signin")}>Login</button>
        ) : (
            <button className="nav2-btn" onClick={() => navigate("/signin")} style={{marginRight:"45px"}}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Navbar2;
