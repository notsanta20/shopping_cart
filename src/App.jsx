import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addCart(data) {
    let tempData = [...cart];
    tempData.push(data);
    setCart(tempData);
  }

  function removeCart(data) {
    let tempData = cart.filter((item) => item.id !== data.id);
    setCart(tempData);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="Shop" element={<Shop addToCart={addCart} />} />
          <Route
            path="Cart"
            element={<Cart items={cart} removeItem={removeCart} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
