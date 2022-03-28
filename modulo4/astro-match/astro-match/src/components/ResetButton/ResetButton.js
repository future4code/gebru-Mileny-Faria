import React from "react";
import { ClearButton } from "./ResetButtonStyled";

export const ResetButton = (props) => {
  return (
    <ClearButton onClick={props.onClickClearMatch}> LIMPAR MATCHS </ClearButton>
  )
}