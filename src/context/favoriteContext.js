import React, { useReducer } from "react";
import { calcSubPrice, calcTotalPrice } from "../helpers/calcPrice";
import { CASE_GET_FAVORITE } from "../helpers/cases";

export const favoriteContext = React.createContext();
const INIT_STATE = {
  favorite: {},
  favoriteLength: 0,
};
const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_FAVORITE:
      return {
        ...state,
        favorite: action.payload,
        favoriteLength: action.payload.products.length,
      };
    default:
      return state;
  }
};

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  function getFavorite() {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
      localStorage.setItem("favorite", JSON.stringify(favorite));
    }
    favorite.totalPrice = calcTotalPrice(favorite.products);
    dispatch({
      type: CASE_GET_FAVORITE,
      payload: favorite,
    });
  }
  function addProductToFavorite(product) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }
    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };
    let isProductInFavorite = favorite.products.some(
      (item) => item.item.id === product.id
    );
    if (isProductInFavorite) {
      favorite.products = favorite.products.filter(
        (item) => item.item.id !== product.id
      );
    } else {
      favorite.products.push(newProduct);
    }
    favorite.totalPrice = calcTotalPrice(favorite.products);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }
  function checkItemInFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }
    let isProductInFavorite = favorite.products.some(
      (item) => item.item.id === id
    );
    return isProductInFavorite;
  }
  function deleteFromFavorite(id) {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }
    favorite.products = favorite.products.filter((item) => item.item.id !== id);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    console.log(favorite);
    getFavorite();
  }
  function changeProductCount(count, id) {
    if (count <= 0) {
      count = 1;
    }
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (!favorite) {
      favorite = {
        products: [],
        totalPrice: 0,
      };
    }
    favorite.products = favorite.products.map((item) => {
      if (item.item.id === id) {
        item.count = count;
        item.subPrice = calcSubPrice(item);
      }
      return item;
    });
    favorite.totalPrice = calcTotalPrice(favorite.products);
    localStorage.setItem("favorite", JSON.stringify(favorite));
    getFavorite();
  }
  return (
    <favoriteContext.Provider
      value={{
        favorite: state.favorite,
        favoriteLength: state.favoriteLength,
        getFavorite,
        addProductToFavorite,
        checkItemInFavorite,
        deleteFromFavorite,
        changeProductCount,
      }}
    >
      {children}
    </favoriteContext.Provider>
  );
};
export default FavoriteContextProvider;
