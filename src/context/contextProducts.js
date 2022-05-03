import axios from "axios";
import React, { useReducer, useState } from "react";

export const contextProducts = React.createContext();
//
//
//cases
const CASE_GET_PRODUCTS = "CASE_GET_PRODUCTS";
const CASE_GET_ONE_PRODUCT = "CASE_GET_ONE_PRODUCT";
// cases end
//
let API = "http://52.91.106.90/api/v1";
//
const INIT_STATE = {
  products: [],
  oneProduct: {},
  productsCount: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_PRODUCTS:
      console.log(action);

      return {
        ...state,
        products: action.payload.data.results,
        productsCount: action.payload.data.count,
      };
    case CASE_GET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload.data,
      };
    default:
      return state;
  }
};

const ContextProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const [loading, setLoading] = useState();

  async function getProducts() {
    setLoading(true);
    let result = await axios(`${API}/post/` + window.location.search);
    console.log(result, "res");
    dispatch({
      type: CASE_GET_PRODUCTS,
      payload: result,
    });
    setLoading(false);
    console.log(result);
  }

  async function createProduct(newProduct) {
    let formData = new FormData();
    formData.append("title", newProduct.title);
    formData.append("text", newProduct.text);
    formData.append("images", newProduct.images);
    formData.append("status", newProduct.status);
    formData.append("price", newProduct.price);
    formData.append("category", newProduct.category);
    console.log(formData);
    await axios.post(API + "/post/", formData, {
      headers: {
        Authorization:
          "Token " + JSON.parse(localStorage.getItem("token")).access,
      },
    });
    getProducts();
  }
  async function deleteProduct(id) {
    await axios.delete(`${API}/post/${id}/`, {
      headers: {
        Authorization:
          "Token " + JSON.parse(localStorage.getItem("token")).access,
      },
    });
    console.log(id);
    getProducts();
  }
  async function getOneProduct(id) {
    let result = await axios(`${API}/post/${id}/`);
    dispatch({
      type: CASE_GET_ONE_PRODUCT,
      payload: result,
    });
  }
  async function editProduct(id, editedProduct) {
    console.log(editedProduct);
    let formData = new FormData();
    formData.append("title", editedProduct.title);
    formData.append("price", editedProduct.price);
    formData.append("text", editedProduct.text);
    formData.append("status", editedProduct.status);
    formData.append("category", editedProduct.category);
    console.log(formData);
    await axios.patch(`${API}/post/${id}/`, formData, {
      headers: {
        Authorization:
          "Token " + JSON.parse(localStorage.getItem("token")).access,
      },
    });
    getProducts();
  }

  return (
    <div>
      <contextProducts.Provider
        value={{
          products: state.products,
          oneProduct: state.oneProduct,
          productsCount: state.productsCount,
          loading,
          getProducts,
          deleteProduct,
          createProduct,
          getOneProduct,
          editProduct,
        }}
      >
        {children}
      </contextProducts.Provider>
    </div>
  );
};

export default ContextProductsProvider;
