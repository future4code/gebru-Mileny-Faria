import React from "react";
import { ContainerClearButton, ClearButton } from "./ResetButtonStyled";

export const ResetButton = (props) => {
  return (
    <ContainerClearButton>
      <ClearButton onClick={props.onClickClearMatch}> LIMPAR MATCHS </ClearButton>
    </ContainerClearButton>
  )
}