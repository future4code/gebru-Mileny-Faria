import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { goToCreateTrip } from "../routes/coordinator";
import { gotToDetailsTrip } from "../routes/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage"
import { goToLogin } from "../routes/coordinator";

export const AdminHomePage = () => {
  useProtectedPage()

  const navigate = useNavigate()

  const deslogar = () => {
    localStorage.removeItem("token")
    goToLogin(navigate)
  }

  return (
    <div>
     <h1>ADMIN HOME PAGE</h1>
     <button onClick={() => goBack(navigate)}>Voltar</button>
     <button onClick={() => goToCreateTrip(navigate)}>Criar Nova Viagem</button>
     <button onClick={() => gotToDetailsTrip(navigate)}>Ver Detalhes da Viagem</button>
     <button onClick={() => deslogar()}>Logout</button>
    </div>
  )
}
