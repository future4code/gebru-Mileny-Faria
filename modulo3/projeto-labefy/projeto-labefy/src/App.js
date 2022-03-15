import React from 'react';
import ListPlaylists from './components/ListPlaylists';
import MusicasPlaylist from './components/MusicasPlaylist';



class App extends React.Component {

  state = {
    renderizarTela: 'telaPlaylists',
    playlistId: "",
  }
  
  escolherTela = () => {
    switch (this.state.renderizarTela) {
      case 'irPraMusicas':
        return <MusicasPlaylist playlistId={this.state.playlistId} irPraTelaPlaylists={this.irPraTelaPlaylists}/>
      case 'telaPlaylists':
        return (
          <div>
            <ListPlaylists irPraTelaMusicas={this.irPraTelaMusicas}/>
          </div>
        )
      default:
        return <h2>Erro! Página não encontrada!</h2>

    }
  }

  irPraTelaMusicas = (playlistId) => {
    this.setState({ renderizarTela: 'irPraMusicas'})
    this.setState({ playlistId: playlistId })
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
