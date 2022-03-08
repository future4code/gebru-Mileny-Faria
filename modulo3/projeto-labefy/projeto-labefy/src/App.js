import CreatePlaylist from './components/CreatePlaylist';
import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh ;

`

class App extends React.Component {


  render () {

    
    return (
      <Container>
        <CreatePlaylist />
      </Container>
    );
  }
}

export default App;
