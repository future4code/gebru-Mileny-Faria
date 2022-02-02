import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/45'}
          fotoPost={'https://picsum.photos/200/130'}
        />

        <Post
          nomeUsuario={'mileny'}
          fotoUsuario={'https://picsum.photos/50/30'}
          fotoPost={'https://picsum.photos/200/120'}
        />

        <Post
          nomeUsuario={'joão vitor'}
          fotoUsuario={'https://picsum.photos/50/20'}
          fotoPost={'https://picsum.photos/200/110'}
        />
      </MainContainer>
    );
  }
}

export default App;
