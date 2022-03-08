import React from "react";
import axios from "axios";
import styled from "styled-components"

const listaUsuarios = styled.div `
  display: flex;
  flex-direction: column;
 
`

class ListaUsers extends React.Component {

    state= {
     listaUsers: []
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
  
    deleteUsers = (idUserDelete) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUserDelete}`
      const headers = {
        headers: {Authorization: "mileny-faria-gebru"}
      }
  
      axios
        .delete(url, headers)
        .then((response) => {
          alert(`O usuário foi deletado`);
          this.getAllUsers() 
        })
        .catch((error) => {
          console.log(this.state.listaUsers.name, this.state.listaUsers.email)
          alert(`Não conseguimos deletar esse usuário`);
        })
    }
  
  
    render () {
  
        const listUsers = this.state.listaUsers.map((user) => {
          return (
            <listaUsuarios>
              <p key={user.id} > {user.name} </p>
              <button onClick={() => this.deleteUsers(user.id)} >X</button>
            </listaUsuarios>
          )
      })
  
        return (
          <div>
            <button onClick={this.props.irTelaCadastro}> Trocar de Tela </button>
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
    
    export default ListaUsers;
    