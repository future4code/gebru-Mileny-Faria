import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProfileCard } from "../ProfileCard/ProfileCard";
import { MatchScreen } from "../../MatchScreen/MatchScreen";
import { Header } from "../../Header/Header";
import { MatchButtons } from "../MatchButtons/MatchButtons";
import { ContainerProfileAndButtons } from "./HomeScreenStyled";

export const HomeScreen = () => {
  const [renderScreen, setRenderScreen] = useState("profileCard")
  const [profileToChoose, setProfileToChoose] = useState([])

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const getProfileToChoose = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mileny/person`)
      .then((res) => {setProfileToChoose(res.data.profile)})
      .catch((err) => {alert("Erro ao carregar perfil")})
  }

  const chooseProfile = (choice) => {
    const headers = {
      "Content-Type": "application/json"
    }
    const body = {
      id: profileToChoose.id,
      choice: choice
    }
    setProfileToChoose([])

    axios
      .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mileny/choose-person",body,headers)
      .then((res) => {getProfileToChoose()})
      .catch((err) => console.log(err.response.data))
  }

  const onClickNo = () => {chooseProfile(false)}
  
  const onClickYes = () => {chooseProfile(true)}

  const renderSelectedScreen = () => {
    switch (renderScreen) {
      case "profileCard":
        return (
          <ContainerProfileAndButtons>
            <ProfileCard profile={profileToChoose} />
            <MatchButtons onClickNo={() => onClickNo()} onClickYes={() => onClickYes()} />
          </ContainerProfileAndButtons>
        )
      case "screenMatchs":
        return <MatchScreen profile={profileToChoose} />
      default:
        return "Não foi possível carregar a página"
    }
  }

  const goToProfileCardScreen = () => {setRenderScreen("profileCard")}

  const goToMatchScreen = () => {setRenderScreen("screenMatchs")}

    return (
      <>
        <Header
          goToProfileCardScreen={() => goToProfileCardScreen()}
          goToMatchScreen={() => goToMatchScreen()}
        />
        {renderSelectedScreen()}
      </>
    )
}