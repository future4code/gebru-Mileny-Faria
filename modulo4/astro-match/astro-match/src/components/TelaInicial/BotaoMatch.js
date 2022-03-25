import React from "react";
import styled from "styled-components";

const ContainerButtons = styled.div`
  padding: 10px 0px;
  position: absolute;
  margin-top: 430px;
`;
const ButtonXStyled = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  color: red;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;
  border: 1px solid red;
  margin-left: 80px;
  &:hover {
    background-color: red;
    color: white;
    border: 1px solid red;
  }
`;

const ButtonHeartStyled = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  color: green;
  transform: scale(0.7);
  transition: all 0.2s ease 0s;
  position: relative;
  box-shadow: rgb(205 205 205 / 73%) 0px 0px 15px 0px;
  overflow: hidden;
  border: 1px solid green;
  margin-left: 80px;
  &:hover {
    background-color: green;
    color: white;
    border: 1px solid green;
  }
`;

export function BotaoMatch(props) {
  return (
    <ContainerButtons>
      <ButtonXStyled onClick={props.onClickNo}> X </ButtonXStyled>
      <ButtonHeartStyled onClick={props.onClickYes}> ♥ </ButtonHeartStyled>
    </ContainerButtons>
  );
}
