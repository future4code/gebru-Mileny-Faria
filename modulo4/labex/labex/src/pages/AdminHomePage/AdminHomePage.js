import React from "react";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goToCreateTripPage, goToHomePage, goToLoginPage } from "../../routes/coordinator";
import { ContainerAdmin, ButtonHome, ButtonCreateTrip, ButtonLogout, Loading, ListTrip, ContainerListTrips, BoxList, Delete, BoxButtons } from "./AdminHomePageStyled";
import { BiHomeAlt } from "react-icons/bi";
import { CgLogOff } from "react-icons/cg";
import { IoTrashOutline } from "react-icons/io5";
import axios from "axios";



export const AdminHomePage = () => {
  const navigate = useNavigate()
  useProtectedPage()
  const [listTrips, setListTrips, isLoading] = useRequestData(`/trips`, {})

  const logOut = () => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
  }

  const deleteTrip = (id, name) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }
      
    const confirm = window.confirm(`Tem certeza que deseja deletar a viagem para ${name}?`)
    if(confirm){
      axios
        .delete(`${BASE_URL}/trips/${id}`, headers)
        .then((res) => {
          Swal.fire(`Viagem ${name} deletada`)
          setListTrips()
        })
        .catch((err) => {
          Swal.fire("Erro ao deletar viagem")
        })
    }
  }

  const goToTripDetail = (id) => {
    navigate(`/admin/trips/${id}`)

  }

    return (
      <ContainerAdmin>
        <ContainerListTrips>
          {isLoading ? <Loading></Loading> : listTrips.trips && listTrips.trips.map((trip) => {
            return(
              <BoxList key={trip.id}>
                <div onClick={() => goToTripDetail(trip.id)}>
                  <ListTrip>{trip.name}</ListTrip>
                </div>
                <Delete onClick={() => deleteTrip(trip.id, trip.name)}> <IoTrashOutline color="#fff" /> </Delete>
              </BoxList>
            )
          })}
        </ContainerListTrips>
        <BoxButtons> 
          <ButtonCreateTrip onClick={() => goToCreateTripPage(navigate)}>Criar Nova Viagem</ButtonCreateTrip>
          <ButtonHome onClick={() => goToHomePage(navigate)}><BiHomeAlt size={50} color="#fff" /></ButtonHome>
          <ButtonLogout onClick={() => logOut()}><CgLogOff size={50} color="#fff" /></ButtonLogout>
        </BoxButtons>
      </ContainerAdmin>

    )
    
}
