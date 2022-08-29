import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

  const navigate = useNavigate();
  const { login } = useContext( AuthContext )

  const onLogin = () => {

    login('Alejandro');
   
    navigate("/", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Ingresar</h1>
      <hr />
      

      <button className="btn btn-dark" onClick={onLogin}>
        Entrar
      </button>
    </div>
  );
};
