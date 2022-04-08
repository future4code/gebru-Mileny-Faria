import React from "react";
import axios from "axios"
import { Container, ContainerCard, Titulo, ContainerInput, Input, Button, Span, ButtonHome, ButtonBack } from "../styled/LoginStyled"
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { goToAdminPage } from "../routes/coordinator";
import { goToHomePage } from "../routes/coordinator";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const navigate = useNavigate()
  const { form, onChange, cleanFields } = useForm({ email: "", password: ""})
  

  const postLogin = (event) => {
    event.preventDefault()
    const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/login"
    const headers = {
      "Content-Type": "application/json"
    }

    axios
    .post(BASE_URL, form, headers)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      goToAdminPage(navigate)
    })
    .catch((err) => {
      alert("Usuário não cadastrado")
    })
    cleanFields()

  }

  
  return (
    <Container>
      <ContainerCard>
      <Titulo>LOGIN PAGE</Titulo>
        <form onSubmit={postLogin}>
          <ContainerInput>
            <Input 
              placeholder="Digite seu email" 
              name="email"
              value={form.email} 
              onChange={onChange}
              required
              type={"email"}
            />
          </ContainerInput>
          <ContainerInput>
            <Input 
              placeholder="Digite sua senha" 
              name="password"
              value={form.password} 
              onChange={onChange} 
              required
              type={"password"}
            />
          </ContainerInput>
          <Button onClick={()=> postLogin()}>
            <Span></Span>
            <Span></Span>
            <Span></Span>
            <Span></Span>
            ENTRAR
          </Button>
      </form>
      </ContainerCard>
    
      <ButtonBack onClick={() => goBack(navigate)}>Voltar</ButtonBack>
      <ButtonHome onClicl={() => goToHomePage(navigate)}>Home Page</ButtonHome>
    </Container>
    
  )
}
