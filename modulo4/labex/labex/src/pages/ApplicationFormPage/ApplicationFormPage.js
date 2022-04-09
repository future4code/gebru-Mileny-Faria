import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useRequestData } from "../../hooks/useRequestData";
import { goToListTripsPage, goToHomePage } from "../../routes/coordinator";
import { Countries } from "../../components/Countries"

export const ApplicationFormPage = () => {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({name: '', age: '', applicationText: '', profession: '', country: ''})
  const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/trips";
  const [trips] = useRequestData(BASE_URL);


  const postApplytoTrip = (event, tripId) => {
    event.preventDefault()
    const URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/trips/${tripId}/apply`

    axios
      .post(URL, form)
      .then((res) => {
        alert("Inscrição enviada! Estamos na torcida!")
      })
      .catch((err) => {
        alert("Não conseguimos finalizar sua inscrição");
      });

      cleanFields()
  };

  const listTrips = trips && trips.map((trip) => {
    return (
      <option tripId={trip.id} key={trip.id} value={trip.name}>
        {trip.name}
      </option>
    );
  });

  return (
    <div>
      <h1>ApplicationFormPage</h1>
      <form onSubmit={(props) => postApplytoTrip(props.tripId)}>
        <select onChange={onChange}>
          <option value={""}>Escolha uma Viagem</option>
          {listTrips}
        </select>
        <input 
          placeholder="Seu nome"
          name={"name"}
          type="text"
          value={form.name}
          onChange={onChange}
        />
        <input 
          placeholder="Sua idade"
          name={"age"}
          type="text"
          value={form.age}
          onChange={onChange}
        />
        <input 
          placeholder="Sua profissão"
          name={"profession"}
          type="text"
          value={form.profession}
          onChange={onChange}
        />
        <select 
          name={"country"}
          type="text"
          value={form.country}
          onChange={onChange}>
          <Countries />
        </select>
        <input 
          placeholder="Por que devemos te escolher?"
          name={"applicationText"}
          type="text"
          value={form.applicationText}
          onChange={onChange}
        />
        <button>Enviar candidatura</button>
      </form>

      <button onClick={() => {goToListTripsPage(navigate)}}>Voltar Para Viagens</button>
      <button onClick={() => {goToHomePage(navigate)}}>Ir para Home</button>
    </div>
  )
}
