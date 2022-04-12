import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../../constants/url";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { goToListTripsPage, goToHomePage } from "../../routes/coordinator";
import { Countries } from "../../components/Countries";
import { ContainerApplicationFormPage, 
  ContainerBoxForm, 
  Title, 
  ContainerInput, 
  Input, 
  ButtonHome, 
  ButtonTrip, 
  Select, 
  ButtonSend,
  Option,
  InputText } from "./ApplicationFormPageStyled";
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
      <Option key={trip.id} value={trip.id}>{trip.name}</Option>
    )
  })

    return (
      <ContainerApplicationFormPage>
        <ContainerBoxForm>
          <Title>Faça sua Inscrição</Title>
          <form onSubmit={postApplytoTrip}>
            <ContainerInput>
              <Select onChange={onChangeTripId}>
                <Option disabled selected>Escolha uma Viagem</Option>
                {renderedlistTrips}
              </Select>
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Qual seu nome?"
                name={"name"}
                type={"text"}
                value={form.name}
                onChange={onChange}
                required
                minlength={3}
              />
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Qual sua idade?"
                name={"age"}
                type={"number"}
                value={form.age}
                onChange={onChange}
                required
                min={18}
              />
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Qual sua profissão?"
                name={"profession"}
                type={"text"}
                value={form.profession}
                onChange={onChange}
                required
                minlength={10}
              />
            </ContainerInput>
            <ContainerInput>
              <Select 
                required
                name={"country"}
                type="text"
                value={form.country}
                onChange={onChange}>
                <Countries />
              </Select>
            </ContainerInput>
            <ContainerInput>
              <InputText 
                placeholder="Por que devemos te escolher?"
                name={"applicationText"}
                type={"text"}
                value={form.applicationText}
                onChange={onChange}
                required
                minlength={30}
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
