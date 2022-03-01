import React from "react";
import axios from "axios";
import CadastroUsuario from "./CadastroUsuario";

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
              this.getAllUsers()
          })
          .catch((error) => {
              console.log(error.response.data)
          })
  
    }
  
    deleteUsers = (idUserDelete) => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
      const param = {
        id: this.state.listaUsers.id
      }
      const headers = {
        headers: {Authorization: "mileny-faria-gebru"}
      }
  
      axios
        .post(url, param, headers)
        .then((response) => {
          console.log(response.data)
          const copia = [...this.state.listaUsers]
          const newListUsers = copia.filter((user) => {
            return user.id !== idUserDelete
          })
          alert(`O usuário ${this.state.listaUsers.name} foi deletado`);
          this.setState({listaUsers: newListUsers})
          this.getAllUsers() 
        })
        .catch((error) => {console.log(error.response.data)})
          console.log(this.state.listaUsers.name, this.state.listaUsers.email)
          alert(`Não conseguimos deletar esse usuário`);
    }
  
  
    render () {
  
        const listUsers = this.state.listaUsers.map((user) => {
          return (
            <>
              <li key={user.id} > {user.name} </li>
              <button onClick={() => this.deleteUsers(user.id)} >X</button>
            </>
          )
      })
  
        return (
          <div>
            <button onClick={CadastroUsuario} >Trocar de Tela</button>
              
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
    