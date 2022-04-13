import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { goToAdminHomePage, goToHomePage, goToLoginPage } from "../../routes/coordinator";
import { 
  ContainerDetails, 
  ContainerCardTrip, 
  Img, Details, 
  Loading, 
  Name, 
  NamePlanet,
  DurationInDays, 
  Date, 
  ButtonHome, 
  ButtonAdmin, 
  ButtonLogout, 
  ContainerButtons, 
  ContainerButtonsAproved,
  ButtonsAprovDesapr,
  CardTitle,
  TextCandidates } from "./TripDetailsPageStyled";
import { BiHomeAlt } from "react-icons/bi";
import { CgLogOff } from "react-icons/cg";
import { BsCheck2, BsX } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";



export const TripDetailsPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const params = useParams()
  const [ detailTrip, setDetailTrip, isLoading ] = useRequestData(`/trip/${params.id}`, [])

  const decideCandidate = (candidateId, approve) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }

    const body = {
      approve
    }

    axios
      .put(`${BASE_URL}/trips/${params.id}/candidates/${candidateId}/decide`, body, headers)
      .then((res) => {
        Swal.fire("Decisão registrada com sucesso")
        setDetailTrip()
      })
      .catch((err) => {
        Swal.fire("Deu erro")
      })
  }

  const logOut = () => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
  }
  
  const listCandidates = detailTrip.trip && detailTrip.trip.candidates.map((candidate) => {
    return(
      <div>
        <p>{`Oi, meu nome é ${candidate.name}, tenho ${candidate.age} anos, moro no ${candidate.country} e trabalho como ${candidate.profession}`}</p>
        <p>{`Acho que vocês devem me escolher ${candidate.applicationText.toLowerCase()}`}</p>
        <ContainerButtonsAproved>
          <ButtonsAprovDesapr onClick={() => decideCandidate(candidate.id, true)}><BsCheck2 size={30} color="#fff"/></ButtonsAprovDesapr>
          <ButtonsAprovDesapr onClick={() => decideCandidate(candidate.id, false)}><BsX size={30} color="#fff"/></ButtonsAprovDesapr>
        </ContainerButtonsAproved>
      </div>
    )
  })

  const candidatesAproved = detailTrip?.trip?.approved?.map((aprov) => {
    return(
      <TextCandidates>
        {aprov.name}
      </TextCandidates>
    )
  })

    return (
      <ContainerDetails>
        {isLoading ? <Loading></Loading> : 
        <ContainerCardTrip>
          <Details>Detalhes da Viagem</Details>
          <Img src={"https://picsum.photos/200"} />
          {detailTrip && detailTrip.trip && <Name>{detailTrip.trip.name}</Name>}
          {detailTrip && detailTrip.trip && <NamePlanet>{`Planeta ${detailTrip.trip.planet}`}</NamePlanet>}
          {detailTrip && detailTrip.trip && <DurationInDays>{`A viagem vai durar ${detailTrip.trip.durationInDays} dias`}</DurationInDays>}
          {detailTrip && detailTrip.trip && <Date>{`A data da viagem será dia ${detailTrip.trip.date}`}</Date>}
        </ContainerCardTrip>
        }
        <ContainerCardTrip>
          <CardTitle>
              <Details>Lista de candidatos</Details>
            {listCandidates && listCandidates.length === 0 ? <TextCandidates>Não há candidatos para esta viagem</TextCandidates> : listCandidates}
          </CardTitle>
          <div>
              <Details>Candidatos aprovados</Details>
              {candidatesAproved && candidatesAproved.length === 0 ? <TextCandidates>Nenhum candidato aprovado</TextCandidates> : candidatesAproved}
          </div>
        </ContainerCardTrip>
        <ContainerButtons>
          <ButtonAdmin onClick={() => goToAdminHomePage(navigate)}><IoArrowBack size={50} color="#fff" /></ButtonAdmin>
          <ButtonHome onClick={() => goToHomePage(navigate)}><BiHomeAlt size={50} color="#fff" /></ButtonHome>
          <ButtonLogout onClick={() => logOut()}><CgLogOff size={50} color="#fff" /></ButtonLogout>
        </ContainerButtons>
      </ContainerDetails>

    )
    
}
