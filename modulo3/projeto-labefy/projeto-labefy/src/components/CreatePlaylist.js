import react from 'react';
import axios from 'axios';
import styled from 'styled-components';
import React from 'react';

const urlPlaylist =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "mileny-faria-gebru"
  }
};

class CreatePlaylist extends React.Component {

    state = {
        playlists: [],
        playlistInput: ""
    };

    componentDidMount() {
        this.getAllPlaylists();
    }
    
    
    getAllPlaylists = () => {
        axios
          .get(urlPlaylist, headers)
          .then((response) => {
            console.log(response.data.result.list);
            this.setState({playlists: response.data.result.list});
          })
          .catch((error) => {
            console.log(error.response);
          });
    };

    createPlaylist = () => {
            
        const body = {
          name: this.state.playlistInput
        };
        axios
          .post(urlPlaylist, body, headers)
          .then((response) => {
            console.log(response.data.result.list);
            alert(`A playlist ${this.state.playlistInput} foi criada com sucesso`);
            this.setState({playlistInput: ""});
            this.getAllPlaylists();
          })
          .catch((error) => {
            console.log(error.response.data.message);
            alert(`A playlist não foi criada`)
          });
    };

    onChangePlaylist = (event) => {
        this.setState({playlistInput: event.target.value});
      };


    render () {
        const playlists = this.state.playlists.map((playlist) => {
            return (
                <>
                    <li key={playlist.id}> {playlist.name} </li>
                    <button>Deletar</button>
                </>
            )
        });

        return (
            <section>
                <input
                    placeholder='Insira aqui sua nova playlist'
                    value={this.state.playlistInput}
                    onChange={this.onChangePlaylist}
                />
                <button onClick={this.createPlaylist} > Criar playlist </button>

                {playlists}

            </section>

)




    }






}

export default CreatePlaylist;