import React from "react";
import { useNavigate } from "react-router-dom"
import { goToApplicationForm } from "../routes/coordinator"
import {
  CardContainer,
  Imagem,
  Button,
  Name,
  Description,
  TripDate,
  TripDurationInDays,
  PorPessoa,
  Sifrão,
  Valor
} from "../styled/CardTripStyled";

export const CardTrip = (props) => {
  const navigate = useNavigate()


  return (
    <CardContainer key={props.tripId}>
      <Imagem
        src={
          "https://t.ctcdn.com.br/WAIOfq4e6nuDheS7LjnofGka3j4=/512x288/smart/filters:format(webp)/i398758.jpeg"
        }
      />
      <Button onCLick={() => goToApplicationForm(navigate)}>EU QUERO</Button>
      <Name> {props.tripName} </Name>
      <Description>{props.tripDescription}</Description>
      <TripDate>Data do lançamento: {props.tripDate}</TripDate>
      <TripDurationInDays>
        Duração da Viagem: {props.tripDurationInDays} dias
      </TripDurationInDays>
      <PorPessoa> por pessoa </PorPessoa>
      <Sifrão> R$ </Sifrão> <Valor>14.923,00</Valor>
    </CardContainer>
  );
};
