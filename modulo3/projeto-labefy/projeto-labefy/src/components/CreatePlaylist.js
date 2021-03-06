import React from 'react';
import styled from "styled-components";
import axios from 'axios';

const ContainerInput = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  display: flex ;
  flex-direction: column ;
  justify-content: space-around;
  padding: 30px;
  margin: 30px auto ;
  width: 250px ;
  height: 180px ;
  background-color: black ;
  border-radius: 30px;
`

const Titulo = styled.h3`
  color: #ff6605;
  text-align: center ;
  margin-top: 5px ;
  background-color: black;
`

const Input = styled.input`
  color: #fff;
  font-family: inherit;
  border-bottom: 2px solid #9b9b9b;
  border: 0;
  outline: 0 ;
  background: transparent ;
  text-align: center;
`

const Button = styled.button`
  margin-top: 30px;
  height: 50px;
  border-radius: 15px ;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px ;
  background-color: #ff6605 ;
`

class CreatePlaylist extends React.Component {

    state = {
      inputPlaylist: ""
    }

    handlePlaylistInput = (event) => {
      this.setState({inputPlaylist: event.target.value})

    }

    createPlaylist = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      const body = {
        name: this.state.inputPlaylist
      }

      axios
        .post(url, body, {
          headers: {
            Authorization: "mileny-faria-gebru"
          }
        })
        .then(res => {
          alert(`Playlist criada com sucesso`)
          this.setState({inputPlaylist: "" })
          this.props.getAllPlaylists()
        })
        .catch(err => alert("Já existe uma playlist com esse nome!"))

    }

   
  
   

    render () {
      
        return (
          <ContainerInput>
            <Titulo>Crie sua Playlist</Titulo>
            <Input
              placeholder="Nome da Playlist"
              value={this.state.inputPlaylist}
              onChange={this.handlePlaylistInput}
            />
            <Button onClick={this.createPlaylist}>CRIAR</Button>
          </ContainerInput>
        )

    }

}

export default CreatePlaylist;
