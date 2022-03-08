import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerMenu = styled.menu`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 200px;
  justify-content: space-around ;
  align-items: center;
  background-color: orange;
  margin: 20px auto;
  padding:0 ;
  border-radius: 30px;


`

class CreatePlaylist extends React.Component {

    state = {
        playlists: [],
        playlistInput: ""
    };

    componentDidMount() {
        this.getAllPlaylists();
    }
    
    
    getAllPlaylists = () => {
      const urlPlaylist =   "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

        axios
          .get(urlPlaylist, {
            headers: {
              Authorization: "mileny-faria-gebru"
            }
          })
          .then((res) => {
            this.setState({playlists: res.data});
          })
          .catch((err) => {
            console.log(err.response);
          });
    };

    createPlaylist = () => {
        const urlPlaylist =   "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
        const body = {
          name: this.state.playlistInput
        };

        axios
          .post(urlPlaylist, body, {
            headers: {
              Authorization: "mileny-faria-gebru"
            }
          })
          .then((res) => {
            alert(`A playlist ${this.state.playlistInput} foi criada com sucesso`);
            this.setState({playlistInput: ""});
            this.getAllPlaylists();
          })
          .catch((err) => {
            alert(err.response.data.message)
          });
    };

    onChangePlaylist = (event) => {
        this.setState({playlistInput: event.target.value});
      };


    render () {
      
        const listPlaylists = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <p> {playlist.name} </p>
                    <button>Deletar</button>
                </div>
            )
        });

        return (
            <section>
                <ContainerMenu>
                  <input
                      placeholder='Digite aqui sua nova playlist'
                      value={this.state.playlistInput}
                      onChange={this.onChangePlaylist}
                  />
                  <button onClick={this.createPlaylist} > Criar playlist </button>
                </ContainerMenu>
                {listPlaylists}

            </section>

)




    }






}

export default CreatePlaylist;