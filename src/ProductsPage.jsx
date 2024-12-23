import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";

export function ProductsPage() {
  const [products, setProducts] = useState([]);
  console.log("handleIndex");
  const handleIndex = () => {
    axios.get("/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };
  useEffect(handleIndex, []);
  return (
    <main>
      <ProductsIndex products={products} />
    </main>
  );
}
