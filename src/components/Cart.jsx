import { useState } from "react";

export default function Cart() {
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
      <h2>{cart}</h2>
    </>
  );
}
