import React from "react";
import { Footer, Header, Login, Title } from "..";
import Carousel from "../Carousel/Carousel";
import "./landing.css";

import banner from "../../assets/img/banner.png";
import { images } from "../../utils/images";
import useProducts from "../../hooks/useProducts";
const Landing = () => {
  const { products } = useProducts();
  console.log(products);
  return (
    <>
      <Header />
      <main className="container-main">
        {/* <Login /> */}
        <div className="section-content">
          <Title title="novedades diarias" />
          <Carousel typeofCard="big" data={images} />
        </div>

        <div className="section-content">
          <Title title="Nueva colección" />
          <Carousel typeofCard="small" data={images} />
        </div>

        <div className="section-content">
          <div className="banner">
            <img src={banner} alt="" />
          </div>
        </div>

        <div className="section-content">
          <Carousel typeofCard="small" data={products} />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Landing;
