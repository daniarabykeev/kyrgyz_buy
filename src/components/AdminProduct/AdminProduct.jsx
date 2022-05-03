import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Card, Tooltip } from "antd";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import AddProduct from "../AddProduct.jsx/AddProduct";
import Navbar from "../Navbar/Navbar";
import "./AdminProduct.css";
const { Meta } = Card;

const AdminProduct = () => {
  const { getProducts, products, deleteProduct } = useContext(contextProducts);
  const navigate = useNavigate();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <Navbar />
      <AddProduct />
      <div className="admin_list">
        {products.map((item) => (
          <div key={item.id}>
            <Card
              className="admin_card"
              style={{ margin: "10px" }}
              cover={
                <img
                  className="card_img"
                  alt="example"
                  src={"http://52.91.106.90" + item.image}
                />
              }
              actions={[
                <Tooltip placement="topLeft" title="Delete">
                  <DeleteOutlined
                    onClick={() => deleteProduct(item.id)}
                    key="setting"
                  />
                </Tooltip>,
                <Tooltip placement="topLeft" title="Edit">
                  <EditOutlined
                    onClick={() => navigate(`/edit/${item.id}`)}
                    key="edit"
                  />
                </Tooltip>,
              ]}
            >
              <Meta title={item.title} description={item.text} />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProduct;
