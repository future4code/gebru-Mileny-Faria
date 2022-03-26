import React from "react";
import { ContainerHeader, Logo, ButtonProfiles, ButtonMatchs } from "./HeaderStyled";

export const Header = (props) => {
  return (
    <ContainerHeader>
      <ButtonProfiles onClick={props.goToProfileCardScreen}> PERFIS </ButtonProfiles>
      <Logo> astromatch </Logo>
      <ButtonMatchs onClick={props.goToMatchScreen}> MATCHS </ButtonMatchs>
    </ContainerHeader>
  )
}
