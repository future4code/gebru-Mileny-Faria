import React from 'react';
import styled from "styled-components"
import CreatePlaylist from './components/CreatePlaylist';
import ListPlaylists from './components/ListPlaylists';
import MusicasPlaylist from './components/MusicasPlaylist';


class App extends React.Component {

  state = {
    renderizarTela: 'telaPlaylists',
    idDaPlaylist: ""
  }
  
  escolherTela = () => {
    switch (this.state.renderizarTela) {
      case 'irPraMusicas':
        return <MusicasPlaylist irPraTelaPlaylists={this.irPraTelaPlaylists()}/>
      case 'telaPlaylists':
        return (
          <div>
            <CreatePlaylist />
            <ListPlaylists  irPraTelaMusicas={this.irPraTelaMusicas(this.state.idDaPlaylist)}/>
          </div>
        )
      default:
        return <h2>Erro! Página não encontrada!</h2>

    }
  }

  irPraTelaMusicas = (playlistId) => {
    this.setState({ renderizarTela: 'irPraMusicas', idDaPlaylist: playlistId })
  }

  irPraTelaPlaylists = () => {
    this.setState({ renderizarTela: 'telaPlaylists' })
  }
    

    render () {
      

        return (
          <div>
            {this.escolherTela()}
          </div>
        )  

    }

}

export default App;
