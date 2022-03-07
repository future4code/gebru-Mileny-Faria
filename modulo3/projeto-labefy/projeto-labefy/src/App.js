import logo from './logo.svg';
import './App.css';
import CreatePlaylist from './components/CreatePlaylist';
import styled from "styled-components";




class App extends React.Component {


  render () {

    
    return (
      <div>
        <CreatePlaylist />
      </div>
    );
  }
}

export default App;
