import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

export const TripDetailsPage = () => {
  const navigate = useNavigate()


  return (
    <div>
     <h1>TRIP DETAILS PAGE</h1>
     <button onClick={() => goBack(navigate)}>Voltar</button>


    </div>
  )
}
