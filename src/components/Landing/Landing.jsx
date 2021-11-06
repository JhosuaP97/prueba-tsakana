import React, { useState, useEffect } from "react";

const Landing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const JSON = await response.json();
      console.log(JSON);
    }

    fetchProducts();
  }, []);
  return <main>landing</main>;
};

export default Landing;
