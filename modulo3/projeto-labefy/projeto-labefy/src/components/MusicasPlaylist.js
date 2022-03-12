import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import AddMusica from './AddMusica';

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

class MusicasPlaylist extends React.Component {

  state = {
    musics: []
  }

  componentDidMount() {
    this.getPlaylistTracks()
  }

  getPlaylistTracks = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`

    axios
      .get(url, {
          headers: {
            Authorization: "mileny-faria-gebru"
          }
      })
      .then(res => this.setState({musics: res.data.result.list}))
      .catch(err => alert("Não conseguimos mostrar suas músicas"))

}
   

    render () {
      
      const renderizaMusicas = this.state.musics.map((music) => {
        return (
            <Lists key={music.id}>
                <p>{music.name}</p>
                <p>{music.artista}</p>
                <p>{music.url}</p>
            </Lists>
        )
    })

        return (
          <ContainerLists>
            <p>Minha Playlist</p>
            {renderizaMusicas}
            <button onClick={this.props.irPraTelaPlaylists}>Voltar para Playlists</button>
            <AddMusica />
          </ContainerLists>
        )

    }

}

export default MusicasPlaylist;
