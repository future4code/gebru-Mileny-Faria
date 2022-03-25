import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  height: 60px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 10px;
`;

const HeaderStyled = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: linear-gradient(to right, #40e0d0 50%, purple 50%);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 200% ;
  margin-top: 20px;
`;

const ButtonPerfis = styled.button`
  border-radius: 30px;
  background-color: #40e0d0 ;
  border: solid 1px;
  border-color: #40e0d0;
  width: 20%;
  height: 50%;
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  `

const ButtonMatchs = styled.button`
border-radius: 30px;
background-color: purple ;
border: solid 1px;
border-color: purple;
width: 20%;
height: 50%;
color: white;
font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export function Header(props) {
  return (
    <DivStyled>
      <ButtonPerfis onClick={props.goToCardPerfilPage}> PERFIS </ButtonPerfis>
      <HeaderStyled> astromatch </HeaderStyled>
      <ButtonMatchs onClick={props.goToTelaMatchsPage}> MATCHS </ButtonMatchs>
    </DivStyled>
  );
}