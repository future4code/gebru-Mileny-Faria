import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { goToAdminPage } from "../routes/coordinator";

export const LoginPage = () => {
  const navigate = useNavigate()

  return (
    <div>
     <h1>LOGIN PAGE</h1>
     <button onClick={() => goBack(navigate)}>Voltar</button>
     <button onClick={() => goToAdminPage(navigate)}>Entrar</button>
    </div>
  )
}
