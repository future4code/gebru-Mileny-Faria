import React from "react";
import axios from "axios";


class CadastroUsuario extends React.Component {

  state= {
    inputName: "",
    inputEmail: "",
    listaUsers: []
  }

  onChangeName = (event) => {
    this.setState({inputName: event.target.value})
  }

  onChangeEmail = (event) => {
    this.setState({inputEmail: event.target.value})
  }
 
  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const headers = {
      headers: {Authorization: "mileny-faria-gebru"}
    }
    axios
        .get(url, headers)
        .then((response) => {
            this.setState({listaUsers: response.data})
        })
        .catch((error) => {
            console.log(error.response.data)
        })

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
        this.getAllUsers() 
      })
      .catch((error) => {console.log(error.response.data)})
        console.log(this.state.inputName, this.state.inputEmail)
        alert(`Não conseguimos criar seu usuário`);
    
  }


  render () {

      const listUsers = this.state.listaUsers.map((user) => {
        return <li key={user.id}> {user.name} </li>
    })

      return (
        <div>
          <button>Trocar de Tela</button>
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

          <br />

          {listUsers}

          <br />
          
          <h2>Procurar Usuário</h2>
          <input placeholder='Nome exato para busca' />
          <button>Salvar Edição</button>
  
  
        </div>
      );
    }
  }
  
  export default CadastroUsuario;
  