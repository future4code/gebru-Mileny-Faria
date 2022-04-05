import React from "react";
import FotoHomePage from "../img/FotoHomePage.png";
import Logo from "../img/Logo.png"
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/coordinator";
import { goToListTrips } from "../routes/coordinator";
import { LogoStyled, ButtonTrips, ButtonLogin } from "../styled/HomePageStyled";


export const HomePage = () => {
  const navigate = useNavigate()
   

  return (
    <div>
      <img src={FotoHomePage} />
      <LogoStyled src={Logo} />
      <ButtonTrips onClick={() => goToListTrips(navigate)}>VIAGENS</ButtonTrips>
      <ButtonLogin onClick={() => goToLogin(navigate)}>LOGIN</ButtonLogin>
    </div>
  )
}
