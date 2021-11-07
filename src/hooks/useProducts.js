import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const JSON = await response.json();
        setProducts(JSON);
      } catch (error) {
        console.log(error);
      }
    }

    fetchProducts();
  }, []);

  return {
    products,
  };
};

export default useProducts;
