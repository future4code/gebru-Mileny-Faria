import React from "react";
import { goToApplicationForm } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

export const ListTripsPage = () => {
  const navigate = useNavigate()

  return (
    <div>
     <h1>LIST TRIPS PAGE</h1>
     <button onClick={() => goToApplicationForm(navigate)}>Eu quero!</button>
     <button onClick={() => goBack(navigate)}>Voltar</button>

    </div>
  )
}
