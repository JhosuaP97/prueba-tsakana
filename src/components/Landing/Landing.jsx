import React from "react";
import { Title } from "..";
import Carousel from "../Carousel/Carousel";
import "./landing.css";

import banner from "../../assets/img/banner.png";
import { images } from "../../utils/images";
import useProducts from "../../hooks/useProducts";
const Landing = () => {
  const { products } = useProducts();
  return (
    <>
      <main className="container-main">
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
      </main>
    </>
  );
};

export default Landing;
