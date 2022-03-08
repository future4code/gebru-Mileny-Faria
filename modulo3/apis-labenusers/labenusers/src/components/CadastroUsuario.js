import React from "react";
import axios from "axios";
import styled from "styled-components"

const Container = styled.div`
  display: flex ;
  flex-direction: column;
  align-items:  center;
  height: 100vh ;
  font-family: Verdana, Geneva, Tahoma, sans-serif ;

`

const ContainerInputs = styled.div`
  display: flex ;
  flex-direction: column ;
  justify-content: space-around;
  height: 200px ;
  border-radius: 20px ;
  border: solid black 1px ;
  padding: 15px;

`
const Inputs = styled.input`
  height: 30px;
  border-radius: 5px ;
  border-color: black;
  border: solid black 1px;

`
const Button = styled.button`
  height: 30px;
  border-radius: 5px ;
  border-color: black;
  border: solid black 1px;

`




class CadastroUsuario extends React.Component {

  state= {
    inputName: "",
    inputEmail: "",
  }

  onChangeName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }
 

  createListaUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    const headers = {
      headers: {Authorization: "mileny-faria-gebru"}
    }
    axios
      .post(url, body, headers)
      .then((response) => {
        alert(`O usuário ${this.state.inputName} foi criado com sucesso`);
        this.setState({inputName: "", inputEmail: ""})
      })
      .catch((error) => {
        alert("Este usuário já está cadastrado");
      })
  }

  render () {

      return (
        <Container>
          <h2>Tela de Cadastro</h2>

          <Button onClick={this.props.irTelaListas}> Ir para Lista de Usuários </Button>
          <br />
          <ContainerInputs>
            <Inputs
              placeholder='Nome'
              onChange={this.onChangeName}
              value={this.state.inputName}
            />
            <Inputs
              placeholder='Email'
              onChange={this.onChangeEmail}
              value={this.state.inputEmail}
            />
            <Button onClick={this.createListaUsers}>Cadastrar</Button>
          </ContainerInputs>
        </Container>
      );
    }
  }
  
  export default CadastroUsuario;
  