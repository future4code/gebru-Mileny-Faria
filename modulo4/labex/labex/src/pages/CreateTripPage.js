import React from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { useProtectedPage } from "../hooks/useProtectedPage"
import { useForm } from "../hooks/useForm";

export const CreateTripPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({name: "", planet: "", date: "", description: "", durationInDays: "" })


  const postCreateTrip = (event) => {
    event.preventDefault()
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    };
  
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/trips`,
        form,
        headers
      )
      .then((res) => {
        alert("Viagem criada!")
      })
      .catch((err => {
        alert("Nao conseguimos criar a sua viagem")
      }));
    
      cleanFields()
  }
  
  return (
    <div>
     <h1>CREATE TRIP PAGE</h1>
     <form onSubmit={postCreateTrip}>
       <div>
        <input
          placeholder="Digite o nome da Viagem"
          name="name"
          value={form.name}
          onChange={onChange}
          required
        />
       </div>
       <div>
        <input
          placeholder="Digite o nome do Planeta"
          name="planet"
          value={form.planet}
          onChange={onChange}
          required
        />
       </div>
       <div>
       <input
          placeholder="Descreve a Viagem"
          name="description"
          value={form.description}
          onChange={onChange}
          required
        />
       </div>
       <div>
       <input
          placeholder="Qual dia?"
          name="date"
          value={form.date}
          onChange={onChange}
          required
        />
       </div>
       <div>
       <input
          placeholder="Qual a duração da viagem?"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          required
        />
        <button>Criar Viagem</button>
       </div>
     </form>

     <button onClick={() => goBack(navigate)}>Voltar</button>

    </div>
  )
}
