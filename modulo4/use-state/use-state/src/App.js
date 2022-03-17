import React from 'react';
import Post from './components/Post/Post';
import styled from "styled-components"

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <AppContainer>
      <Post
        nomeUsuario={'Mileny'}
        fotoUsuario={'https://picsum.photos/50/50?=1'}
        fotoPost={'https://picsum.photos/200/150?=2'}
      />

       <Post
        nomeUsuario={'Joao Vitor'}
        fotoUsuario={'https://picsum.photos/50/50?=3'}
        fotoPost={'https://picsum.photos/200/150?=4'}
      />        

       <Post
        nomeUsuario={'Fran'}
        fotoUsuario={'https://picsum.photos/50/50?=5'}
        fotoPost={'https://picsum.photos/200/150?=6'}
      />                
    </AppContainer>
  );
}

export default App;
