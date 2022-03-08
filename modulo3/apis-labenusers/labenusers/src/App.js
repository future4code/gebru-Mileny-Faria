import React from "react";
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsers from './components/ListaUsers';

class App extends React.Component {

  state = {
    pageUsers: "cadastro"
  }

  changePage = () => {
   switch (this.state.pageUsers) {
    case "cadastro":
      return <CadastroUsuario irTelaListas={this.irTelaListas} />
    case "lista":
      return <ListaUsers irTelaCadastro={this.irTelaCadastro}/>
    default:
      return <h2>Erro! Página não encontrada</h2>
   }
  }

  irTelaCadastro = () => {
    this.setState({pageUsers: "cadastro"})
  }

  irTelaListas = () => {
    this.setState({pageUsers: "lista"})
  }

  render () {
      
    return (
      <div>
        {this.changePage()}
      </div>
    );
  }
}

export default App;
