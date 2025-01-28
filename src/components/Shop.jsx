import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Shop({ addToCart }) {
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

  if (isLoading)
    return (
      <>
        <h1>SHOP</h1>
        <h2 className="text-center text-2xl">Loading . . .</h2>
      </>
    );

  return (
    <>
      <h1>SHOP</h1>
      <Cards itemData={data} addToCart={addToCart} />
    </>
  );
}
