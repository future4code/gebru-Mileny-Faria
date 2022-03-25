import React from "react";
import {
  ImagemStilo,
  ContainerPerfil,
  ContainerBio,
  NomeEIdade,
  Blur,
  TextoPerfil,
  ContainerPhoto
} from "./CardPerfilStyled";

export function CardPerfil(props) {
  return (
    <ContainerPerfil>
      <ContainerPhoto>
        <Blur imagem={props.profile.photo} />
        <ImagemStilo src={props.profile.photo} />
      </ContainerPhoto>
      <ContainerBio>
        <NomeEIdade>
          {props.profile.name}, {props.profile.age}
        </NomeEIdade>
        <TextoPerfil>{props.profile.bio}</TextoPerfil>
      </ContainerBio>
    </ContainerPerfil>
  );
}
