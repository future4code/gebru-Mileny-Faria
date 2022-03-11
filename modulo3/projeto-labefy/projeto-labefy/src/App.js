import React from 'react';
import styled from "styled-components"
import CreatePlaylist from './components/CreatePlaylist';
import ListPlaylists from './components/ListPlaylists';


const Container = styled.div`
  background-color: #1C1C1C;

`

class App extends React.Component {

    

    render () {
      

        return (
          <Container>
            <CreatePlaylist />
            <ListPlaylists />
          </Container>
        )

    }

}

export default App;
