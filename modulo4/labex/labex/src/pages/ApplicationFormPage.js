import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Input,
  Select,
  Form,
  ButtonBack,
  ButtonSend,
  Imagem,
  Title,
  ContainerButtons,
  Option
} from "../styled/ApplicationFormPageStyled";
import Foto from "../img/FotoAppForm.png";


export const ApplicationFormPage = (props) => {
  const [inputTrip, setInputTrip] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputText, setInputText] = useState("");
  const [inputOccupation, setInputOccupation] = useState("");
  const [inputCountry, setInputCountry] = useState("");
  const [trips, setTrips] = useState();
  
  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get()
      .then((res) => setTrips(res.data.trips));
  };

  const postApplyToTrip = (tripId) => {
    const body = {
      name: inputName,
      age: inputAge,
      applicationText: inputText,
      profession: inputOccupation,
      country: inputCountry
    };
    const headers = {
      "Content-Type": "application/json"
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/trips/${tripId}/apply`,
        body,
        headers
      )
      .then((res) => {
        console.log(res.data);
        setInputName("");
        setInputAge("");
        setInputText("");
        setInputOccupation("");
      });
  };

  const onChangeTrip = (event) => {
    setInputTrip(event.target.value);
  };

  const onChangeName = (event) => {
    setInputName(event.target.value);
  };

  const onChangeAge = (event) => {
    setInputAge(event.target.value);
  };

  const onChangeText = (event) => {
    setInputText(event.target.value);
  };

  const onChangeOccupation = (event) => {
    setInputOccupation(event.target.value);
  };

  const onChangeCountry = (event) => {
    setInputCountry(event.target.value);
  };

  const onClickBack = () => {
    console.log("Voltei");
    setInputName("");
    setInputAge("");
    setInputText("");
    setInputOccupation("");
  };
  console.log(inputTrip);
  const listTrips =
    trips &&
    trips.map((trip) => {
      return (
        <Option tripId={trip.id} key={trip.id} value={trip.name}>
          {trip.name}
        </Option>
      );
    });

  return (
    <div>
      <Imagem src={Foto} />
      <Title>Eu Quero!</Title>
      <Form action="#" method="get">
        <Select onChange={onChangeTrip}>
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
        <Select onChange={onChangeCountry}>
          <option value={""}>Escolha um País</option>
          <option value="Afeganistão">Afeganistão</option>
          <option value="África do Sul">África do Sul</option>
          <option value="Albânia">Albânia</option>
          <option value="Alemanha">Alemanha</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antilhas Holandesas">Antilhas Holandesas</option>
          <option value="Antárctida">Antárctida</option>
          <option value="Antígua e Barbuda">Antígua e Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Argélia">Argélia</option>
          <option value="Armênia">Armênia</option>
          <option value="Aruba">Aruba</option>
        </Select>
        <ContainerButtons>
          <ButtonBack onClick={onClickBack}> Voltar </ButtonBack>
          <ButtonSend onClick={() => postApplyToTrip(props.tripId)}>
            {" "}
            Enviar{" "}
          </ButtonSend>
        </ContainerButtons>
      </Form>
    </div>
  );
};
