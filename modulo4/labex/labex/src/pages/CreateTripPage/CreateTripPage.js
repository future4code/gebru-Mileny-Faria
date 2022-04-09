import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToHomePage } from "../../routes/coordinator";

export const CreateTripPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>CreateTripPage</h1>
      <button onClick={() => goToAdminHomePage(navigate)}>
        Voltar para Pagina Administrativa
      </button>
      <button onClick={() => goToHomePage(navigate)}>Voltar para Home</button>
    </div>
  );
};
