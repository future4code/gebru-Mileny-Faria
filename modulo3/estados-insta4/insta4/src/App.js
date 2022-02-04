import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`

const Inputs = styled.div`
  margin: 30px 0;
  font-size: 16px;
  color: #5b5b5b;
  border: 1px green solid;
  padding: 10px 10px 10px 15px;
  box-sizing: content-box;
  z-index: 2;
`

const Input = styled.input`
  margin: 0 10px;
  font-size: 16px;
  border: 1px green solid;
  padding: 10px 10px 10px 15px;
`

const Button = styled.button`
border-radius: 4px;
font-family: Verdana;
font-weight: bold;
font-size: 13px;
padding: 6px 10px;
`

class App extends React.Component {

  state = {

    posts: [
      {
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/45",
        fotoPost: "https://picsum.photos/200/130",
      },
      {
        nomeUsuario: "Mileny",
        fotoUsuario: "https://picsum.photos/50/30",
        fotoPost: "https://picsum.photos/200/120"
      },
      {
        nomeUsuario: "João Vitor",
        fotoUsuario: "https://picsum.photos/50/20",
        fotoPost: "https://picsum.photos/200/110"
      },
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaUsuario = () => {
    const novoUsuario = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoUsuarios = [...this.state.posts, novoUsuario];

    this.setState({ posts: novoUsuarios });
    this.setState({valorInputNomeUsuario: "", valorInputFotoUsuario: "", valorInputFotoPost: ""})
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {

    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        {listaPosts}

        <Inputs>
          <Input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome Usuário"}
          />
          <Input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link Foto Usuário"}
          />
          <Input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link Foto Post"}
          />
          <Button onClick={this.adicionaUsuario}>Adicionar</Button>
        </Inputs>
      </MainContainer>
    );
  }
}

export default App;
