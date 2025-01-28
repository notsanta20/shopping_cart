import "./App.css";
import Menu from "./components/Menu";
import Home from "./components/home";
import Shop from "./components/shop";
import Cart from "./components/Cart";
import { Routes, Route } from "react-router";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const count = cart.length;

  function addCart(data) {
    let tempData = [...cart];
    let newData = data;
    newData.size = 1;
    if (tempData.length > 0) {
      const contains = tempData.filter((item) => item.title === data.title);
      if (contains.length === 0) {
        tempData.push(newData);
      }
    } else {
      tempData.push(newData);
    }
    setCart(tempData);
  }

  function removeCart(data) {
    let tempData = cart.filter((item) => item.id !== data.id);
    setCart(tempData);
  }

  function decSize(item) {
    let tempSize = item.size;
    tempSize--;
    if (tempSize === 0) {
      removeCart(item);
    } else {
      setCart(
        cart.map((i) => {
          if (i.title === item.title) {
            return { ...i, size: tempSize };
          } else {
            return i;
          }
        })
      );
    }
  }

  function incSize(item) {
    let tempSize = item.size;
    tempSize++;
    setCart(
      cart.map((i) => {
        if (i.title === item.title) {
          return { ...i, size: tempSize };
        } else {
          return i;
        }
      })
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Menu count={count} />}>
          <Route index element={<Home />} />
          <Route
            path="Shop"
            element={
              <Shop
                addToCart={addCart}
                cart={cart}
                decSize={decSize}
                incSize={incSize}
              />
            }
          />
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
