import React from "react";
import axios from "axios";
import styled from "styled-components"





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
        console.log(response.data)
        alert(`O usuário ${this.state.inputName} foi criado com sucesso`);
        this.setState({inputName: "", inputEmail: ""})
        this.props.getAllUsers() 
      })
      .catch((error) => {console.log(error.response.data)})
        console.log(this.state.inputName, this.state.inputEmail)
        alert(`Não conseguimos criar seu usuário`);
    
  }

  render () {

      return (
        <div>
          <input
            placeholder='Nome'
            onChange={this.onChangeName}
            value={this.state.inputName}
          />
          <input
            placeholder='Email'
            onChange={this.onChangeEmail}
            value={this.state.inputEmail}
          />
          <button onClick={this.createListaUsers} >Criar Usuário</button>

          
        </div>
      );
    }
  }
  
  export default CadastroUsuario;
  