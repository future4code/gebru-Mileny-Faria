import React from 'react';
import styled from "styled-components";
import axios from 'axios';


const ContainerInput = styled.div`
font-family: Verdana, Geneva, Tahoma, sans-serif ;
display: flex ;
flex-direction: column ;
justify-content: space-around;
padding: 30px;
margin: 30px 800px ;
width: 250px ;
height: 180px ;
background-color: black ;
border-radius: 30px;
`

const Titulo = styled.h3`
color: #ff6605;
text-align: center ;
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
margin-top: 15px;
`

const Button = styled.button`
margin-top: 30px;
height: 40px;
width: 200px;
align-self: center;
border-radius: 15px ;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size: 20px ;
background-color: #ff6605 ;
`

class AddMusica extends React.Component {
    
    state = {
        inputNomeMusica: "",
        inputNomeArtista: "",
        inputLinkAudio: ""
    }

    onChangeInputNomeMusica = (event) => {
        this.setState({inputNomeMusica: event.target.value})
    }

    onChangeInputNomeArtista = (event) => {
        this.setState({inputNomeArtista: event.target.value})
      }

    onChangeInputLinkAudio = (event) => {
        this.setState({inputLinkAudio: event.target.value})
      }


    addTrackToPlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`
        const body = {
          name: this.state.inputNomeMusica,
          artist: this.state.inputNomeArtista,
          url: this.state.inputLinkAudio
        }
  
        axios
          .post(url, body, {
            headers: {
              Authorization: "mileny-faria-gebru"
            }
          })
          .then(res => {
            alert(`Música adicionada com sucesso`)
            this.setState({inputNomeMusica: "", inputNomeArtista: "", inputLinkAudio: ""})
            this.props.getPlaylistTracks()
          })
          .catch(err => alert("Não conseguimos adicionar essa música!"))
  
      }


    render () {
      
        return (
            <ContainerInput>
                <Titulo>Adicione uma Música</Titulo>
                <Input
                placeholder="Nome da Música"
                value={this.state.inputNomeMusica}
                onChange={this.onChangeInputNomeMusica}
                />
                <Input
                placeholder="Nome do Artista"
                value={this.state.inputNomeArtista}
                onChange={this.onChangeInputNomeArtista}
                />
                 <Input
                placeholder="Link com o arquivo mp3"
                value={this.state.inputLinkAudio}
                onChange={this.onChangeInputLinkAudio}
                />
                <Button onClick={() => this.addTrackToPlaylist(this.props.playlistId)}>ADICIONAR</Button>
            </ContainerInput>
        )

    }

}

export default AddMusica;
