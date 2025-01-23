import { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Shop() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  function addToCart(item) {
    console.log(item);
  }

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

  if (isLoading) return <h2>Loading</h2>;

  return (
    <>
      <Cards data={data} addToCart={addToCart} />
    </>
  );
}
