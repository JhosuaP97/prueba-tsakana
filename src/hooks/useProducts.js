import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const JSON = await response.json();
      setProducts(JSON);
    }

    fetchProducts();
  }, []);

  return {
    products,
  };
};

export default useProducts;
