import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage"

export const CreateTripPage = () => {
  useProtectedPage()

  const navigate = useNavigate()
  
  return (
    <div>
     <h1>CREATE TRIP PAGE</h1>
     <button onClick={() => goBack(navigate)}>Voltar</button>

    </div>
  )
}
