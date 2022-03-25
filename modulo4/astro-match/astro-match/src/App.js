import React from "react";
import { HomeScreen } from "./components/HomeScreen/HomeScreen/HomeScreen";
import { ResetButton } from "./components/ResetButton/ResetButton";
import { AppContainer } from "./AppStyled";
import axios from "axios";

export default function App() {
  const onClickClearMatch = () => {
    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mileny/clear")
      .then((res) => {return alert("Lista de matchs deletada com sucesso!")})
      .catch((err) => {return alert("Erro ao apagar lista, tente novamente")})
  }
    return (
      <AppContainer>
        <HomeScreen />
        <ResetButton onClickClearMatch={() => onClickClearMatch()} />
      </AppContainer>
    )
}
