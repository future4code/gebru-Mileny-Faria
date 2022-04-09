import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage } from "../../routes/coordinator";
import FotoHomePage from "../../img/FotoHomePage.png";
import LogoLabex from "../../img/Logo.png";
import styled from "styled-components";
import { IoRocketOutline } from 'react-icons/io5';
import { FiLogIn } from "react-icons/fi";


const ContainerHome = styled.div`
  position: absolute;
  width:100vw;
  height:100vh;
  background-image: url(${FotoHomePage});
  background-repeat: no-repeat;
  background-size:cover;
`

const Logo = styled.img`
  position: absolute;
  width: 300px;
  margin-top: 40px;
  margin-left: 60px;
`
const ContainerButton = styled.div`
  display: flex;
  width: 300px;
  margin-top: 60px;
  justify-content: space-around;
  margin-left: 1000px;
`
const Buttons = styled.div`
  padding: 10px 20px;
  color: #ff0043;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  :hover {
    background: #ff0043;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #ff0043, 0 0 25px #ff0043, 0 0 50px #ff0043,
      0 0 100px #ff0043;
  }

`

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <ContainerHome>
      <div>
        <Logo src={LogoLabex} />
      </div>
      
      <ContainerButton>
        <Buttons onClick={() => goToListTripsPage(navigate)}><IoRocketOutline  size={50} color="#fff" /></Buttons>
        <Buttons onClick={() => goToLoginPage(navigate)}><FiLogIn size={50} color="#fff" /></Buttons>
      </ContainerButton>
    </ContainerHome>
  );
};
