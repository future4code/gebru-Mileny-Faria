import React, { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { goToAdminPage } from "../routes/coordinator";

export const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const postLogin = () => {
    const BASE_URL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/mileny-faria-gebru/login"
    const body = {email, password}
    const headers = {
      "Content-Type": "application/json"
    }

    axios
    .post(BASE_URL, body, headers)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      setEmail("")
      setPassword("")
      goToAdminPage(navigate)
    })
    .catch((err) => {
      alert("Usuário não cadastrado")
      setEmail("")
      setPassword("")
    })

  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div>
     <h1>LOGIN PAGE</h1>
     <input placeholder="Digite seu email" value={email} onChange={onChangeEmail} />
     <input placeholder="Digite sua senha" value={password} onChange={onChangePassword} />

     <button onClick={postLogin}>Entrar</button>
    <br />
    <br />
     <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  )
}
