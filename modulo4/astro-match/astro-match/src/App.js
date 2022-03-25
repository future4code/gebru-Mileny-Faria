import React from "react";
import styled from "styled-components";
import { TelaInicial } from "./components/TelaInicial/TelaInicial";

const AppContainer = styled.div`
  width: 400px;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`;

export default function App() {
  return (
    <AppContainer>
      <TelaInicial />
    </AppContainer>
  );
}
