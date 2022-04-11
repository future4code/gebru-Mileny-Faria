import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { goToListTripsPage, goToHomePage } from "../../routes/coordinator";
import { Countries } from "../../components/Countries";
import { ContainerApplicationFormPage, ContainerBoxForm, Title, ContainerInput, Input, ButtonHome, ButtonTrip, Select, ButtonSend } from "./ApplicationFormPageStyled";
import { BiHomeAlt } from "react-icons/bi";
import { IoRocketOutline } from 'react-icons/io5';


export const ApplicationFormPage = () => {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({name: '', age: '', applicationText: '', profession: '', country: ''})
  const [ trips ] = useRequestData("/trips", [])
  const [ tripId, setTripId ] = useState("")


  const postApplytoTrip = (event) => {
    event.preventDefault()

    axios
      .post(`${BASE_URL}/trips/${tripId}/apply`, form)
      .then((res) => {
        Swal.fire("Inscrição enviada! Estamos na torcida!")
      })
      .catch((err) => {
        Swal.fire("Não conseguimos finalizar sua inscrição")
      })

      cleanFields()
  }

  const onChangeTripId = (event) => {
    setTripId(event.target.value)
  }


  const renderedlistTrips = trips.trips && trips.trips.map((trip) => {
    return (
      <option key={trip.id} value={trip.id}>{trip.name}</option>
    )
  })

    return (
      <ContainerApplicationFormPage>
        <ContainerBoxForm>
          <Title>Faça sua Inscrição</Title>
          <form onSubmit={postApplytoTrip}>
            <ContainerInput>
              <Select onChange={onChangeTripId}>
                <option disabled selected>Escolha uma Viagem</option>
                {renderedlistTrips}
              </Select>
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Qual seu nome?"
                name={"name"}
                type="text"
                value={form.name}
                onChange={onChange}
              />
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Qual sua idade?"
                name={"age"}
                type="text"
                value={form.age}
                onChange={onChange}
              />
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Qual sua profissão?"
                name={"profession"}
                type="text"
                value={form.profession}
                onChange={onChange}
              />
            </ContainerInput>
            <ContainerInput>
              <Select 
                name={"country"}
                type="text"
                value={form.country}
                onChange={onChange}>
                <Countries />
              </Select>
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Por que devemos te escolher?"
                name={"applicationText"}
                type="text"
                value={form.applicationText}
                onChange={onChange}
              />
            </ContainerInput>
            <ButtonSend type={"submit"}>Enviar</ButtonSend>
          </form>
        </ContainerBoxForm>
        <ButtonTrip onClick={() => goToListTripsPage(navigate)}><IoRocketOutline  size={50} color="#fff" /></ButtonTrip>
        <ButtonHome onClick={() => goToHomePage(navigate)}><BiHomeAlt size={50} color="#fff" /></ButtonHome>
      </ContainerApplicationFormPage>

    )
    
}
