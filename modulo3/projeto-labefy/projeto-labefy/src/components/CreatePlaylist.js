import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerMenu = styled.menu`
  display: flex ;
  flex-direction: column;
  align-items:  center;
  height: 100vh ;
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
`

const ContainerLists = styled.div`
  display: flex ;
  align-items: center ;
  justify-content: space-between;
  margin-top: 10px ;
  height: 50px ;
  width:300px ;
  border-radius: 20px ;
  border: solid black 1px ;
  padding: 15px;
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
            alert("Já existe uma playlist com esse nome")
          });
    };

    onChangePlaylist = (event) => {
        this.setState({playlistInput: event.target.value});
      };


    render () {
      
      const listPlaylist = this.state.playlists.map((playlist) => {
        return (
          <ContainerLists>
            <p key={playlist.id} > {playlist.name} </p>
            <button>Deletar</button>
          </ContainerLists>
        )
    })

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
                {listPlaylist}

            </section>

)




    }






}

export default CreatePlaylist;