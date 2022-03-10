import React from 'react';
import styled from "styled-components";
import axios from 'axios';



class ListPlaylists extends React.Component {

    state = {
        playlists: []
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
          .then(res => this.setState({playlists: res.data}))
          .catch(err => alert("Não conseguimos mostrar suas playlists"))

    }

    render () {

        const renderedPlaylists = this.state.playlists.map((playlist) => {
            return (
                <div key={playlist.id}>
                    <span>{playlist.name}</span>
                </div>
            )
        })
      

        return (
          <div>
            <h3>Minhas Playlists</h3>
            {renderedPlaylists}
          </div>
        )

    }

}

export default ListPlaylists;
