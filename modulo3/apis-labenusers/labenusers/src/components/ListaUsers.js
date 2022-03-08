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

const ContainerLists = styled.div`
  display: flex ;
  align-items: center ;
  justify-content: space-between;
  margin-top: 10px ;
  height: 50px ;
  width:300px ;
  border-radius: 20px ;
  border: solid black 1px ;
  padding: 15px;

`
const Button = styled.button`
  height: 30px;
  border-radius: 5px ;
  border-color: black;
  border: solid black 1px;

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
      const deletar = window.confirm(`Tem certeza de que deseja deletar o usuário?`)

      if(deletar === true) {
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
    }
  
  
    render () {
  
        const listUsers = this.state.listaUsers.map((user) => {
          return (
            <ContainerLists>
              <p key={user.id} > {user.name} </p>
              <Button onClick={() => this.deleteUsers(user.id)} >Deletar</Button>
            </ContainerLists>
          )
      })
  
        return (
          <Container>
            <h2>Lista de Usuários Cadastrados</h2>

            <Button onClick={this.props.irTelaCadastro}> Voltar para Cadastro </Button>
            <br />
            {listUsers}  

          </Container>
        );
      }
    }
    
    export default ListaUsers;
    