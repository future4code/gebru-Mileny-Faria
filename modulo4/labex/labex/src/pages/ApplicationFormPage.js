import React, { useState, useEffect } from "react";
import { useForm } from "../hooks/useForm"
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
  const { form, onChange, cleanFields } = useForm({name: "", age: "", applicationText: "", profession: "", country: "" })
  const [inputTrip, setInputTrip] = useState("");
  const [trips, setTrips] = useState();
  
  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/trips")
      .then((res) => setTrips(res.data.trips));
  };

  const postApplyToTrip = (event, tripId) => {
    event.preventDefault()

    const headers = {
      "Content-Type": "application/json"
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/trips/${tripId}/apply`,
        form,
        headers
      )
      .then((res) => {
        console.log("Enviado com sucesso!")
      });
    
      cleanFields()
  };

  const onChangeTrip = (event) => {
    setInputTrip(event.target.value);
  };

  const onClickBack = () => {
    console.log("Voltei");
  };

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
      <Form onSubmit={() => postApplyToTrip(props.tripId)}>
        <Select onChange={onChangeTrip}>
          <Option value={""}>Escolha uma Viagem</Option>
          {listTrips}
        </Select>
        <Input 
          placeholder="Nome" 
          name={"name"}
          value={form.name} 
          onChange={onChange} 
          required
        />
        <Input 
          placeholder="Idade" 
          name={"age"}
          value={form.age} 
          onChange={onChange} 
          required
       />
        <Input
          placeholder="Texto de Candidatura"
          name={"applicationText"}
          value={form.text}
          onChange={onChange}
          required
        />
        <Input
          placeholder="Profissão"
          name={"profession"}
          value={form.profession}
          onChange={onChange}
        />
        <Select onChange={onChange}>
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
          <ButtonSend>
            {" "}
            Enviar{" "}
          </ButtonSend>
        </ContainerButtons>
      </Form>
    </div>
  );
};
