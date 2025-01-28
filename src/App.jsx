import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const cartCount = document.querySelector(`.cart-count`);
  const count = cart.length;

  function addCart(data) {
    let tempData = [...cart];
    if (tempData.length > 0) {
      const contains = tempData.filter((item) => item.title === data.title);
      if (contains.length === 0) {
        tempData.push(data);
      }
    } else {
      tempData.push(data);
    }
    setCart(tempData);
    cartCount.classList.add(`cart-count-anim`);
  }

  function removeCart(data) {
    let tempData = cart.filter((item) => item.id !== data.id);
    setCart(tempData);
    if (cart.length === 1) cartCount.classList.remove(`cart-count-anim`);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Menu count={count} />}>
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
