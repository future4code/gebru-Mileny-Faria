import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import CreatePlaylist from './CreatePlaylist';
import NotaMusical1 from '../imgs/notas1.png';



const ContainerLists = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  display: flex ;
  flex-direction: column ;
  align-items: center;
  padding: 30px;
  margin:20px, auto;

`

const Titulo = styled.h3`
  color: #ff6605;
  text-align: center ;
  margin-top: 5px ;
`

const Lists = styled.span`
  display: flex;
  color: #ff6605;
  text-transform: uppercase;
  justify-content: space-around;
  font-family: 'Courier New', Courier, monospace;
  margin: 15px;
  border: solid 5px #ff6605;
  border-radius: 30px;
  width: 300px;
  padding: 30px;
  
`
const ButtonDeletar = styled.button`
  height: 20px;
  width: 100px;
  border-radius: 10px ;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 10px ;
  background-color: black ;
  margin-left: 50px;
  color: blanchedalmond;
`
const ButtonOuvir = styled.button`
  height: 20px;
  width: 100px;
  border-radius: 10px ;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 10px ;
  background-color: black ;
  margin-left: 50px;
  color: blanchedalmond;
`

const Imagem1 = styled.img`
  width: 10vw;
  position: absolute;
  margin: 20px 60px;
`

class ListPlaylists extends React.Component {

    state = {
        playlists: [],
        
    }

    componentDidMount() {
        this.getAllPlaylists()
    }
    
    getAllPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        axios
          .get(url, {
              headers: {
                Authorization: "mileny-faria-gebru"
              }
          })
          .then(res => this.setState({playlists: res.data.result.list}))
          .catch(err => alert("Não conseguimos mostrar suas playlists"))

    }

    deletePlaylist = (playlistId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`

        axios
            .delete(url, {
                headers: {
                    Authorization: "mileny-faria-gebru"
                }})
            .then(res => {
                    alert("Playlist deletada!")
                    this.getAllPlaylists()
            })
            .catch(err => alert("Não conseguimos excluir sua playlist"))
    }

    render () {

        const renderedPlaylists = this.state.playlists.map((playlist) => {
            return (
                <Lists key={playlist.id}>
                    <p>{playlist.name}</p>
                    <ButtonOuvir onClick={() => this.props.irPraTelaMusicas(playlist.id)}>Ouvir</ButtonOuvir>
                    <ButtonDeletar onClick={() => this.deletePlaylist(playlist.id)}>Deletar</ButtonDeletar>
                </Lists>
            )
        })
      

        return (
          <div>
            <Imagem1 src={NotaMusical1}></Imagem1>
          
            <ContainerLists>
              <Titulo>Minhas Playlists</Titulo>
              {renderedPlaylists}
              <CreatePlaylist getAllPlaylists={this.getAllPlaylists}/>
            </ContainerLists>
          </div>
        )

    }

}

export default ListPlaylists;
