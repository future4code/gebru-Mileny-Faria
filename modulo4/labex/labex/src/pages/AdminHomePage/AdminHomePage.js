import React from "react";
import { useNavigate } from "react-router-dom";
import {
  goToTripDetailsPage,
  goToCreateTripPage,
  goToHomePage
} from "../../routes/coordinator";

export const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>AdminHomePage</h1>
      <button onClick={() => goToTripDetailsPage(navigate)}>
        Ver Detalhes da Viagem
      </button>
      <button onClick={() => goToCreateTripPage(navigate)}>
        Criar Nova Viagem
      </button>
      <button onClick={() => goToHomePage(navigate)}>Voltar para Home</button>
    </div>
  );
};
