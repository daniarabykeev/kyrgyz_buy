import React from "react";
import ContextProductsProvider from "./context/contextProducts";
import Routing from "./Routing";
// import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./App.css";
import CartContextProvider from "./context/cartContext";
import FavoriteContextProvider from "./context/favoriteContext";
import AuthContextProvider from "./context/authContext";
const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <FavoriteContextProvider>
          <ContextProductsProvider>
            <CartContextProvider>
              <Routing />
            </CartContextProvider>
          </ContextProductsProvider>
        </FavoriteContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
