import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import "./EditProduct.css";

const EditProduct = () => {
  const { getOneProduct, editProduct, oneProduct } =
    useContext(contextProducts);
  const params = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    form.setFieldsValue(oneProduct);
  }, [oneProduct]);

  function save(values) {
    console.log(values);
    editProduct(params.id, values);
    navigate("/admin");
  }

  return (
    <div className="edit_products">
      <h2 className="edit_title">You can make adjustments</h2>
      <div className="edit_box">
        <Form form={form} layout="vertical" name="basic" onFinish={save}>
          <Form.Item
            label="Name"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input name!",
              },
            ]}
          >
            <Input placeholder="name of instrument" />
          </Form.Item>

          <Form.Item
            name="text"
            label="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input.TextArea placeholder="description" />
          </Form.Item>
          <Form.Item label="status" name="status">
            <Select>
              <Select.Option value="In stock">in stock</Select.Option>
              <Select.Option value="out of stock">out of stock</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input price!",
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Image"
            name="images"
            rules={[
              {
                required: true,
                message: "Please edit URL of image!",
              },
            ]}
          >
            <Input
              placeholder="URL of image"
              // onChange={(e) => setImg(e.target.files[0])}

              // type="file"
            />
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input details!",
              },
            ]}
          >
            <Select>
              <Select.Option value={"clothes"}>Clothes</Select.Option>
              <Select.Option value={"music"}>Music</Select.Option>
              <Select.Option value={"interior"}>Interior</Select.Option>\{" "}
              <Select.Option value={"tours"}>Tours</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Save product</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default EditProduct;