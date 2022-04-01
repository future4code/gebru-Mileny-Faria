import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { Input, Select, Form, ButtonBack, ButtonSend, Imagem, Title, ContainerButtons, Option } from "../styled/ApplicationFormPageStyled";
import FotoAppForm from "../img/FotoAppForm.png";


export const ApplicationFormPage = () => {
  const navigate = useNavigate()
  const [inputName, setInputName] = useState("")
  const [inputAge, setInputAge] = useState("")
  const [inputText, setInputText] = useState("")
  const [inputOccupation, setInputOccupation] = useState("")
  const [trips, setTrips] = useState()

  useEffect(() => {
    getTrips()
  }, [])

  const getTrips = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/trips")
      .then((res) => setTrips(res.data.trips))
  }

  const onChangeName = (event) => {
    setInputName(event.target.value);
    console.log(inputName)
  }

  const onChangeAge = (event) => {
    setInputAge(event.target.value);
    console.log(inputAge)
  }

  const onChangeText = (event) => {
    setInputText(event.target.value);
    console.log(inputText)
  }

  const onChangeOccupation = (event) => {
    setInputOccupation(event.target.value);
    console.log(inputOccupation)
  }

  const onChangeTrips = (event) => {
    setTrips(event.target.value)
  }

  const onClickBack = () => {
    console.log("Voltei")
    setInputName("")
    setInputAge("")
    setInputText("")
    setInputOccupation("")
  }

  const onClickSend = () => {
    console.log("Enviei")
    setInputName("")
    setInputAge("")
    setInputText("")
    setInputOccupation("")
  }

  const listTrips =
    trips &&
    trips.map((trip) => {
      return (
        <Option key={trip.id} value={trip.name}>
          {trip.name}
        </Option>
      )
    })

  return (
    <div>
      <h1>APPLICATION FORM PAGE</h1>
      <Imagem src={FotoAppForm} />
      <Title>Eu Quero!</Title>
      <Form action="#" method="get">
        <Select onChange={onChangeTrips}>
          <Option value={""}>Escolha uma Viagem</Option>
          {listTrips}
        </Select>
        <Input placeholder="Nome" value={inputName} onChange={onChangeName} />
        <Input placeholder="Idade" value={inputAge} onChange={onChangeAge} />
        <Input
          placeholder="Texto de Candidatura"
          value={inputText}
          onChange={onChangeText}
        />
        <Input
          placeholder="Profissão"
          value={inputOccupation}
          onChange={onChangeOccupation}
        />
        <Select>
          <option>Escolha um País</option>
        </Select>
        <ContainerButtons>
          <ButtonBack onClick={onClickBack}> Voltar </ButtonBack>
          <ButtonSend onClick={onClickSend}> Enviar </ButtonSend>
        </ContainerButtons>
      </Form>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )

}
