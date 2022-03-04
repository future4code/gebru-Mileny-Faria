import React from "react";
import CadastroUsuario from './components/CadastroUsuario';
import './App.css';
import ListaUsers from './components/ListaUsers';

class App extends React.Component {

  state = {
    pageUsers: "cadastro"
  }

  changePage = () => {
    if (this.state.pageUsers === "cadastro") {
      this.setState({pageUsers: "lista"})  
    } else {
      this.setState({pageUsers: "cadastro"}) 
    }
  
  }

  render () {
      
    return (
      <div>
        <button onClick={this.changePage}>Trocar de Tela</button>
        {this.state.pageUsers === "cadastro" ? <CadastroUsuario /> : <ListaUsers />}

      </div>
    );
  }
}

export default App;
