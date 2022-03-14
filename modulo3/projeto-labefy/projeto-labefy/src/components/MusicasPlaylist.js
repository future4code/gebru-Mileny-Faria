import React from 'react';
import styled from "styled-components";
import axios from 'axios';
import AddMusica from './AddMusica';
import NotaMusical1 from '../imgs/notas1.png';


const ContainerLists = styled.div`
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  display: flex ;
  flex-direction: column ;
  align-items: center;
  padding: 30px;
  margin:20px, 50px;

`
const Lists = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ff6605;
  text-transform: uppercase;
  font-family: 'Courier New', Courier, monospace;
  margin-top: 15px;
  border: solid 5px #ff6605;
  border-radius: 30px;
  width: 300px;
  padding: 30px;
  
`

const Titulo = styled.h3`
  color: #ff6605;
  text-align: center ;
  margin-top: 5px ;
`

const Button = styled.button`
  margin-top: 30px;
  width: 300px;
  height: 40px;
  border-radius: 15px ;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px ;
  background-color: #ff6605 ;
`

const ButtonDeletarMusica = styled.button`
  color: white;
  width: 150px;
  border-radius: 5px;
  padding: 8px;
  margin-top: 20px;
`

const ListasMusicas = styled.p`
  margin-bottom: 10px;

`
const Imagem1 = styled.img`
  width: 10vw;
  position: absolute;
  margin: 20px 60px;
`


class MusicasPlaylist extends React.Component {

  state = {
    musics: []
  }

  componentDidMount() {
    this.getPlaylistTracks()
  }

  getPlaylistTracks = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks`

    axios
      .get(url, {
          headers: {
            Authorization: "mileny-faria-gebru"
          }
      })
      .then(res => {this.setState({musics: res.data.result.tracks})})
      .catch(err => console.log(err.response))

}

removeTrackFromPlaylist = (trackId) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistId}/tracks/${trackId}`

  axios
      .delete(url, {
          headers: {
              Authorization: "mileny-faria-gebru"
          }})
      .then(res => {
              alert("Música deletada!")
              this.getPlaylistTracks()
      })
      .catch(err => alert("Não conseguimos excluir essa música!"))
}
   

    render () {
      
      const renderizaMusicas = this.state.musics.map((music) => {
        return (
            <Lists key={music.id}>
                <ListasMusicas>Música: {music.name}</ListasMusicas>
                <ListasMusicas>Artista: {music.artist}</ListasMusicas>
                <audio src={music.url} controls loop></audio>
                <ButtonDeletarMusica onClick={() => this.removeTrackFromPlaylist(music.id)}>Deletar Música</ButtonDeletarMusica>
            </Lists>
        )
    })

        return (
          <div>
            <Imagem1 src={NotaMusical1}></Imagem1>
          
            <ContainerLists>
              <Titulo>Minha Playlist</Titulo>
              {renderizaMusicas}
              <AddMusica getPlaylistTracks={this.getPlaylistTracks} playlistId={this.props.playlistId}/>
              <Button onClick={this.props.irPraTelaPlaylists}>Voltar para Playlists</Button>
            </ContainerLists>
          </div>
        )

    }

}

export default MusicasPlaylist;
