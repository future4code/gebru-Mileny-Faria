import React from 'react';
import styled from "styled-components";
import axios from 'axios';

const ContainerLists = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  display: flex ;
  flex-direction: column ;
  padding: 30px;
  margin: auto ;
  margin-top: 20px;
  width: 350px ;
  height: 100vh ;
  
  border-radius: 30px;

`

const Titulo = styled.h3`
  color: orange;
  text-align: center ;
  margin-top: 5px ;
`

const Lists = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: orange;
  text-transform: uppercase;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 15px;
  
`
const Button = styled.button`
  height: 20px;
  width: 80px;
  border-radius: 10px ;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 10px ;
  background-color: orange ;
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
                    <p onClick={this.props.irPraTelaMusicas()}>{playlist.name}</p>
                    <Button onClick={() => this.deletePlaylist(playlist.id)}>Deletar</Button>
                </Lists>
            )
        })
      

        return (
          <ContainerLists>
            <Titulo>Minhas Playlists</Titulo>
            {renderedPlaylists}
          </ContainerLists>
        )

    }

}

export default ListPlaylists;
