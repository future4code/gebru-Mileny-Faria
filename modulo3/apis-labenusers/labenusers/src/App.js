import React from "react";
import CadastroUsuario from './components/CadastroUsuario';
import './App.css';
import ListaUsers from './components/ListaUsers';

class App extends React.Component {

  render () {
    return (
      <div>
        <ListaUsers />

      </div>
    );
  }
}

export default App;
