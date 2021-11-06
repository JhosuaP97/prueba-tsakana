import React from "react";
import "./button.css";

const STYLES = ["btn-primary-solid"];

const SIZES = ["btn-large", "btn-small"];

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  disabled,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSizes = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${checkButtonStyle} ${checkButtonSizes}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
