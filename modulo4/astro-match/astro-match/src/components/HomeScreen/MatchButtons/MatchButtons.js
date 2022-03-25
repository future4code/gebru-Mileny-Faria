import React from "react";
import { ContainerButtons, ButtonX, ButtonHeart } from "./MatchButtonsStyled";

export const MatchButtons = (props) => {
  
  return (
    <ContainerButtons>
      <ButtonX onClick={props.onClickNo}> X </ButtonX>
      <ButtonHeart onClick={props.onClickYes}> ♥ </ButtonHeart>
    </ContainerButtons>
  )
}
