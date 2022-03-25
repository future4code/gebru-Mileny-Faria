import React from "react";
import { DivStyled, HeaderStyled, ButtonProfiles, ButtonMatchs } from "./HeaderStyled";

export const Header = (props) => {
  return (
    <DivStyled>
      <ButtonProfiles onClick={props.goToProfileCardScreen}> PERFIS </ButtonProfiles>
      <HeaderStyled> astromatch </HeaderStyled>
      <ButtonMatchs onClick={props.goToMatchScreen}> MATCHS </ButtonMatchs>
    </DivStyled>
  )
}
