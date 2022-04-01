import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { goToCreateTrip } from "../routes/coordinator";
import { gotToDetailsTrip } from "../routes/coordinator";

export const AdminHomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
     <h1>ADMIN HOME PAGE</h1>
     <button onClick={() => goBack(navigate)}>Voltar</button>
     <button onClick={() => goToCreateTrip(navigate)}>Criar Nova Viagem</button>
     <button onClick={() => gotToDetailsTrip(navigate)}>Ver Detalhes da Viagem</button>
    </div>
  )
}
