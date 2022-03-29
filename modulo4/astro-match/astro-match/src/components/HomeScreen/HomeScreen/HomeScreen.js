import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { MatchScreen } from "../../MatchScreen/MatchScreen";
import { Header } from "../../Header/Header";
import { MatchButtons } from "../MatchButtons/MatchButtons";
import { ContainerProfileAndButtons, LoadingProfile, Text } from "./HomeScreenStyled";
import { ResetButton } from "../../ResetButton/ResetButton";
import Triste from "../../../img/triste.png";

export const HomeScreen = () => {
  const [renderScreen, setRenderScreen] = useState("profileCard")
  const [profileToChoose, setProfileToChoose] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const getProfileToChoose = async () => {
    setIsLoading(true)
    await axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mileny/person`
      )
      .then((res) => {
        setProfileToChoose(res.data.profile)
      })
      .catch((err) => {
        Swal.fire({
          titleText: "Erro ao Carregar perfil!"
        })
      })
    setIsLoading(false)
  }

  const chooseProfile = (choice) => {
    const headers = {
      "Content-Type": "application/json"
    };
    const body = {
      id: profileToChoose.id,
      choice: choice
    }
    setProfileToChoose([])

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mileny/choose-person",
        body,
        headers
      )
      .then((res) => {
        getProfileToChoose()
        if (res.data.isMatch === true) {
          return Swal.fire({
            titleText: "Deu Match!"
          })
        }
      })
  }

  const onClickNo = () => {
    chooseProfile(false)
  }

  const onClickYes = () => {
    chooseProfile(true)
  }

  const renderSelectedScreen = () => {
    switch (renderScreen) {
      case "profileCard":
        if (isLoading) {
          return <LoadingProfile> </LoadingProfile>;
        }
        if (profileToChoose) {
          return (
            <ContainerProfileAndButtons>
              <ProfileCard profile={profileToChoose} />
              <MatchButtons
                onClickNo={() => onClickNo()}
                onClickYes={() => onClickYes()}
              />
            </ContainerProfileAndButtons>
          )
        }
        return (
          <>
            <img src={Triste} />
            <Text>Limpe sua lista de matchs para aparecer mais perfis!</Text>
          </>
        )
      case "screenMatchs":
        return <MatchScreen />;
      default:
        return Swal.fire({
          titleText: "Não foi possível carregar a página!"
        })
      }
  
  }

  const goToProfileCardScreen = () => {
    setRenderScreen("profileCard")
  }

  const goToMatchScreen = () => {
    setRenderScreen("screenMatchs")
  }

  const onClickClearMatch = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mileny/clear"
      )
      .then((res) => {
        alert("Lista de matchs deletada com sucesso!")
        if (!profileToChoose) {
          getProfileToChoose()
        }
      })
      .catch((err) => {
        Swal.fire({
          titleText: "Erro ao apagar lista, tente novamente!"
        })
      })
  }
  

  return (
    <>
      <Header
        goToProfileCardScreen={() => goToProfileCardScreen()}
        goToMatchScreen={() => goToMatchScreen()}
      />
      {renderSelectedScreen()}
      <ResetButton onClickClearMatch={() => onClickClearMatch()} />
    </>
  )
}
