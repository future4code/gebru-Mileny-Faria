import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerListMatchs, Perfil, Name, ListRender } from "./MatchScreenStyled";

export const MatchScreen = () => {
  const [matches, setMatches] = useState([])

  const getMatches = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mileny/matches")
      .then((res) => {setMatches(res.data.matches)})
      .catch((err) => alert("Não foi possível carregar o perfil"))
  }

  useEffect(() => {
    getMatches()
  }, [])

  const listMatches = matches.map((profile) => {
    return (
      <ContainerListMatchs>
        <Perfil src={profile.photo} />
        <Name> {profile.name} </Name>
      </ContainerListMatchs>
    )
  })

  return <ListRender>{listMatches}</ListRender>

}
