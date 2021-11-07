import React from "react";

import "./card.css";
const Card = ({ card, typeofCard }) => {
  const { image, price, title } = card;
  const smallCard = typeofCard === "small";
  const renderCard = () => (
    <article
      className={`${smallCard ? "container-card small" : "container-card"} "`}
    >
      <img src={image} alt="img" />
      {smallCard && <p className="old-price">`${price}`</p>}
      <div className={`card-info ${smallCard && "small-card"}`}>
        <h2 className={`${smallCard && "card-text"}`}>{title}</h2>
        <div className="card-price">
          <p className={`${smallCard && "big-price"}`}>$27900</p>
          {smallCard && <p className="card-discount">60% OFF</p>}
        </div>
      </div>
      {smallCard && <small className="card-send-free">Envio gratis</small>}
    </article>
  );
  return renderCard();
};

export default Card;
