import React, { useState } from "react";
import { Button, InputField } from "..";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import "./login.css";
import { CheckIcon, CloseIcon } from "../../assets";

const Login = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
  } = useForm();

  const [selected, setSelected] = useState("left");

  const watchEmail = watch("email");
  const watchPassword = watch("password");

  const isFill = watchEmail !== "" && watchPassword !== "";

  const onSubmit = (data) => {
    console.log(data);
    toast.custom((t) => (
      <div className="alert-container">
        <div className="alert-info">
          <CheckIcon />
          <div className="message">Sesión iniciada correctamente</div>
        </div>
        <button className="alert-close" onClick={() => toast.dismiss(t.id)}>
          <CloseIcon />
        </button>
      </div>
    ));
  };

  return (
    <div className="container-login">
      <div className="main-content">
        <div className="header-container">
          <div className="header-button">
            <button onClick={() => setSelected("left")}>Iniciar sesión</button>
          </div>
          <div className="header-button">
            <button onClick={() => setSelected("right")}>Crear cuenta</button>
          </div>
          <div className="header-lines">
            <span
              className={`${selected === "left" && "line-selected"}`}
            ></span>
            <span
              className={`${
                selected === "right" && "line-selected right-line"
              }`}
            ></span>
          </div>
        </div>

        {selected === "left" && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-row">
              <InputField
                type="text"
                textLabel="Correo electrónico"
                name="email"
                placeholder="Ingrese un correo"
                error={errors.email}
                {...register("email", {
                  required: "Campo obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Correo inválido",
                  },
                })}
              />
            </div>
            <div className="input-row">
              <InputField
                type="password"
                textLabel="Contraseña"
                name="password"
                error={errors.password}
                placeholder="Ingrese una contraseña"
                {...register("password", {
                  required: "Campo obligatorio",
                })}
              />
            </div>

            <div className="input-row">
              <a href="#">He olvidado mi contraseña</a>
            </div>

            <div className="input-row">
              <div className="container-checkbox">
                <input type="checkbox" name="" id="" />
                <p>
                  Quiero mantener mi sesión iniciada para personalizar mi
                  experiencia de compra.
                </p>
              </div>
            </div>

            <div className="container-button">
              <Button
                type="submit"
                buttonStyle="btn-primary-solid"
                buttonSize="btn-large"
                disabled={!isFill}
              >
                Iniciar sesión
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
