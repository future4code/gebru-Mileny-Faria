import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm"
import { BASE_URL } from "../../constants/url";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToHomePage, goToLoginPage } from "../../routes/coordinator";
import { ContainerCreate, 
  ContainerBoxForm, 
  Title, 
  ContainerInput, 
  Input, 
  ButtonCreate,
  ButtonHome, 
  ButtonAdmin, 
  ButtonLogout, 
  Select,
  Option } from "./CreateTripPageStyled";
import { BiHomeAlt } from "react-icons/bi";
import { CgLogOff } from "react-icons/cg";
import { IoArrowBack } from "react-icons/io5";
import { planets } from "../../constants/planets";

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
        Swal.fire("Não conseguimos criar sua viagem...")
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
                name={"name"}
                value={form.name}
                onChange={onChange}
                required
                minlength={5}
                type={"text"}
              />
            </ContainerInput>
            <ContainerInput>
            <Select
              name={"planet"}
              value={form.planet}
              onChange={onChange}
              required
            >
              <Option value={""} disabled selected>Planetas</Option>
              {planets.map((planet)=>{
                return <Option key={planet}>{planet}</Option>
              })}
            </Select>
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Dia da Viagem" 
                name={"date"} 
                value={form.date} 
                onChange={onChange}
                required
                type={"date"}
              />
            </ContainerInput>
            <ContainerInput>
              <Input 
                placeholder="Quantos dias vai durar a viagem?" 
                name="durationInDays" 
                value={form.durationInDays} 
                onChange={onChange}
                required 
                type={"number"}
                min={50}
              />
            </ContainerInput>
            <ContainerInput>
              <Input
                placeholder="Descreva sua Viagem"
                name="description"
                value={form.description}
                onChange={onChange}
                minlength={30}
                type={"text"}
                required
              />
            </ContainerInput>
            <ButtonCreate type={"submit"}>Criar</ButtonCreate>
          </form>
        </ContainerBoxForm>
        <ButtonAdmin onClick={() => goToAdminHomePage(navigate)}><IoArrowBack size={50} color="#fff" /></ButtonAdmin>
        <ButtonHome onClick={() => goToHomePage(navigate)}><BiHomeAlt size={50} color="#fff" /></ButtonHome>
        <ButtonLogout onClick={() => logOut()}><CgLogOff size={50} color="#fff" /></ButtonLogout>
      </ContainerCreate>

    )
    
}
