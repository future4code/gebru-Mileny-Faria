import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { CardPerfil } from "./CardPerfil";
import { TelaMatchs } from "../TelaMatchs/TelaMatchs";
import { Header } from "../Header/Header";
import { BotaoMatch } from "./BotaoMatch";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export function TelaInicial() {
  const [selectedPage, setSelectedPage] = useState("cardPerfil");
  const [profileToChoose, setProfileToChoose] = useState([]);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mileny/person`
      )
      .then((res) => {
        console.log(profileToChoose);
        setProfileToChoose(res.data.profile);
      })
      .catch((err) => {
        alert("Erro ao carregar perfil");
      });
  };

  const chooseProfile = (choice) => {
    const headers = {
      "Content-Type": "application/json"
    };
    const body = {
      id: profileToChoose.id,
      choice: choice
    };
    setProfileToChoose([]);

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mileny/choose-person",
        body,
        headers
      )
      .then((res) => {
        getProfileToChoose();
      })
      .catch((err) => console.log(err.response.data));
  };

  const onClickNo = () => {
    chooseProfile(false);
  };
  const onClickYes = () => {
    chooseProfile(true);
  };

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "cardPerfil":
        return (
          <Container>
            <CardPerfil profile={profileToChoose} />
            ;
            <BotaoMatch
              onClickNo={() => onClickNo()}
              onClickYes={() => onClickYes()}
            />
          </Container>
        );
      case "telaMatchs":
        return <TelaMatchs profile={profileToChoose} />;
      default:
        return "Não foi possível carregar a página";
    }
  };

  const goToCardPerfilPage = () => {
    setSelectedPage("cardPerfil");
  };

  const goToTelaMatchsPage = () => {
    setSelectedPage("telaMatchs");
  };

  return (
    <div>
      <Header
        goToCardPerfilPage={() => goToCardPerfilPage()}
        goToTelaMatchsPage={() => goToTelaMatchsPage()}
      />
      {renderSelectedPage()}
    </div>
  );
}
