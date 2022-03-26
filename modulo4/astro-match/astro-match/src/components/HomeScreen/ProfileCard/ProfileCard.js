import React from "react";
import { ContainerProfile, ContainerPhoto, Blur, Photo, ContainerBio, NameAge, Bio } from "./ProfileCardStyled";

export const ProfileCard = (props) => {
  return (
    <ContainerProfile>
      <ContainerPhoto>
        <Blur imagem={props.profile.photo} />
        <Photo src={props.profile.photo} />
      </ContainerPhoto>
      <ContainerBio>
        <NameAge>
          {props.profile.name} {props.profile.age}
        </NameAge>
        <Bio>{props.profile.bio}</Bio>
      </ContainerBio>
    </ContainerProfile>
  )
}
