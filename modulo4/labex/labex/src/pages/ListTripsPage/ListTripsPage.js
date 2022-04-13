import React from "react";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { CardTrips } from "../../components/CardTrips";
import { goToHomePage } from "../../routes/coordinator";
import { BiHomeAlt } from "react-icons/bi";
import { ContainerListTrips, ListRender, ButtonHome, Loading } from "./ListTripsPageStyled";


export const ListTripsPage = () => {
  const navigate = useNavigate()
  const [listTrips, setListTrips, isLoading] = useRequestData(`/trips`, {})


  const renderedTripsList = listTrips.trips && listTrips.trips.map((trip) => {
    return (
        <CardTrips
          id={trip.id}
          name={trip.name}
          description={trip.description}
          planet={trip.planet}
          durationInDays={trip.durationInDays}
          date={trip.date}
        />
    )
  })

  return (
    <ContainerListTrips>
      {isLoading ? <Loading></Loading> : <ListRender>{renderedTripsList}</ListRender>}
      <ButtonHome onClick={() => goToHomePage(navigate)}><BiHomeAlt size={40} color="#fff" /></ButtonHome>
    </ContainerListTrips>
  )
}
