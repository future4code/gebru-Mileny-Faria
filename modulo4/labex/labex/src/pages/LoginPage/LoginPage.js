import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { goToAdminHomePage, goToHomePage } from "../../routes/coordinator";
import { ContainerLoginPage, ContainerBoxLogin, Titulo, ContainerInput, Input, ButtonEntrar, ButtonHome } from "./LoginPageStyled";
import { BiHomeAlt } from "react-icons/bi";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({email: '', password: ''})
  
  const onSubmitLogin = (event) => {
    event.preventDefault()
    const URL =
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/login";

    axios
      .post(URL, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToAdminHomePage(navigate);
      })
      .catch((err) => {
        alert("Deu erro");
      });

      cleanFields()
  };

  return (
    <ContainerLoginPage>
      <ContainerBoxLogin>
        <Titulo>Login</Titulo>
        <form onSubmit={onSubmitLogin}>
          <ContainerInput>
            <Input
              placeholder="Digite seu Email"
              name={"email"}
              type="email"
              value={form.email}
              onChange={onChange}
            />
          </ContainerInput>
          <ContainerInput>
            <Input
              placeholder="Digite sua Senha"
              name={"password"}
              type="password"
              value={form.password}
              onChange={onChange}
            />
          </ContainerInput>
          <ButtonEntrar>Entrar</ButtonEntrar>
        </form>
      </ContainerBoxLogin>
      <ButtonHome onClick={() => goToHomePage(navigate)}><BiHomeAlt size={50} color="#fff" /></ButtonHome>
    </ContainerLoginPage>
  );
};
