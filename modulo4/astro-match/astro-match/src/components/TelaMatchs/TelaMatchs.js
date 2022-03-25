import React, { useState, useEffect } from "react";
import { BotaoResetar } from "../BotaoResetar/BotaoResetar";
import axios from "axios";
import styled from "styled-components";

const ListItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #a1887f;
  :hover {
    background-color: #bdbdbd;
  }
`;

const Perfil = styled.img`
  border-radius: 50%;
  padding: 15px;
  width: 70px;
  height: 70px;
`;

const Name = styled.p`
  margin-right: auto;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
`;

export const TelaMatchs = () => {
  const [matches, setMatches] = useState([]);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mileny/matches"
      )
      .then((res) => {
        setMatches(res.data.matches);
      })
      .catch((err) => alert("Não conseguimos carregar o perfil"));
  };

  useEffect(() => {
    getMatches();
  }, []);

  const listMatches = matches.map((profile) => {
    return (
      <ListItemContainer>
        <Perfil src={profile.photo} />
        <Name> {profile.name} </Name>
      </ListItemContainer>
    );
  });

  return (
    <div>
      {listMatches}
      <BotaoResetar />
    </div>
  );
};
