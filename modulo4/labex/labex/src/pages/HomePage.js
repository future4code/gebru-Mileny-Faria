import React from "react";
import FotoHomePage from "../img/FotoHomePage.png";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";
import { goToListTrips } from "../routes/coordinator";

export const HomePage = () => {
  const navigate = useNavigate()

  return (
    <div>
      <img src={FotoHomePage} />
      <button onClick={() => goToListTrips(navigate)}>Viagens</button>
      <button onClick={() => goToLogin(navigate)}>Login</button>
    </div>
  )
}
