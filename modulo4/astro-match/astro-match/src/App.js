import React from "react";
import { HomeScreen } from "./components/HomeScreen/HomeScreen/HomeScreen";
import { AppContainer } from "./AppStyled";
import axios from "axios";

export default function App() {
   return (
      <AppContainer>
        <HomeScreen />
      </AppContainer>
    )
}
