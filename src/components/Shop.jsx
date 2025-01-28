import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Shop({ addToCart, cart, decSize, incSize }) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        if (!res.ok) throw new Error(`HTTP error: Status ${res.status}`);
        const data = await res.json();
        setData(data);
      } catch (err) {
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    dataFetch();
  }, []);

  function ShopPage() {
    if (isLoading) {
      return (
        <h2 className="text-2xl h-screen flex justify-center items-center">
          Loading . . .
        </h2>
      );
    } else {
      return (
        <Cards
          itemData={data}
          addToCart={addToCart}
          cart={cart}
          decSize={decSize}
          incSize={incSize}
        />
      );
    }
  }

  return (
    <>
      <h1>SHOP</h1>
      <ShopPage />
    </>
  );
}
