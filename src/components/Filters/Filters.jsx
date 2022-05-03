import React, { useContext } from "react";
import { Select, Slider } from "antd";
import { contextProducts } from "../../context/contextProducts";
import "./Filter.css";

const Filters = ({ title, setTitle, price, setPrice }) => {
  const { products } = useContext(contextProducts);
  return (
    <div className="filter_main">
      <Select
        value={title}
        onChange={(e) => setTitle(e)}
        placeholder="Filter by name"
        style={{ width: "100%" }}
        allowClear
        mode="multiple"
      >
        {products.map((item) => (
          <Select.Option key={item.id} value={item.title}>
            {item.title}
          </Select.Option>
        ))}
      </Select>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[1, 1000]}
        min={0}
        max={1000}
        step={100}
        range
        style={{ width: "20vw" }}
      />
    </div>
  );
};

export default Filters;
