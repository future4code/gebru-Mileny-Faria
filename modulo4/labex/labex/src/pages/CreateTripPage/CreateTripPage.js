import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm"
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToHomePage, goToLoginPage } from "../../routes/coordinator";
import { ContainerCreate, ContainerBoxForm, Title, ContainerInput, Input, ButtonCreate,ButtonHome, ButtonAdmin, ButtonLogout } from "./CreateTripPageStyled";
import { BiHomeAlt } from "react-icons/bi";
import { CgLogOut, CgLogOff } from "react-icons/cg";

export const CreateTripPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

  const logOut = () => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
  }

  const postCreateTrip = (event) => {
    event.preventDefault()
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
     }
    }
    
    axios.post(`${BASE_URL}/trips`, form, headers)
      .then((res) => {
        Swal.fire("Viagem criada com sucesso!")
      })
      .catch((err) => {
        Swal.fire("Naõ conseguimos criar sua viagem...")
      })

    cleanFields()

  }  

    return (
      <ContainerCreate>
        <ContainerBoxForm>
          <Title>Crie sua Viagem</Title>
          <form onSubmit={postCreateTrip}>
            <ContainerInput>
              <Input
                placeholder="Nome da sua Viagem"
                name="name"
                value={form.name}
                onChange={onChange}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Nome do Planeta"
                name="planet"
                value={form.planet}
                onChange={onChange}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Dia da Viagem" 
                name="date" 
                value={form.date} 
                onChange={onChange}
                required
              />
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Quantos dias vai durar a viagem?" 
                name="durationInDays" 
                value={form.durationInDays} 
                onChange={onChange}
                required 
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Descreva sua Viagem"
                name="description"
                value={form.description}
                onChange={onChange}
                required
              />
            </ContainerInput>
            <ButtonCreate type={"submit"}>Criar</ButtonCreate>
          </form>
        </ContainerBoxForm>
        <ButtonAdmin onClick={() => goToAdminHomePage(navigate)}><CgLogOut size={50} color="#fff" /></ButtonAdmin>
        <ButtonHome onClick={() => goToHomePage(navigate)}><BiHomeAlt size={50} color="#fff" /></ButtonHome>
        <ButtonLogout onClick={() => logOut()}><CgLogOff size={50} color="#fff" /></ButtonLogout>
      </ContainerCreate>

    )
    
}
