import React, { forwardRef } from "react";
import { AlertIcon } from "../../assets";
import "./inputField.css";
const InputField = (
  { type, textLabel, name, placeholder, value, onChange, error },
  ref
) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{textLabel}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        className={error && "error-input"}
      />
      {error && (
        <small className="error-message">
          <AlertIcon width={20} />
          {error.message}
        </small>
      )}
    </div>
  );
};

const InputFieldRef = forwardRef(InputField);

export default InputFieldRef;
