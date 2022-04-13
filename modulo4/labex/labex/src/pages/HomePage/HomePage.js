import React from "react";
import LogoLabex from "../../img/Logo.png";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../routes/coordinator";
import { ContainerHome, Logo, ContainerButtons, Buttons } from "./HomePageStyled";
import { IoRocketOutline } from 'react-icons/io5';
import { FiLogIn } from "react-icons/fi";



export const HomePage = () => {
  const navigate = useNavigate()
    
    return (
      <ContainerHome>
        <div>
          <Logo src={LogoLabex} />
        </div>
        
        <ContainerButtons>
          <Buttons onClick={() => goToListTripsPage(navigate)}><IoRocketOutline  size={50} color="#fff" /></Buttons>
          <Buttons onClick={() => goToLoginPage(navigate)}><FiLogIn size={50} color="#fff" /></Buttons>
        </ContainerButtons>
      </ContainerHome>
    
  )

}
