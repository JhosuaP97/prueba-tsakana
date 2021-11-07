import React from "react";
import "./title.css";
const Title = ({ title }) => {
  return (
    <>
      {title && (
        <h1>
          <span>{title}</span>
        </h1>
      )}
    </>
  );
};

export default Title;
