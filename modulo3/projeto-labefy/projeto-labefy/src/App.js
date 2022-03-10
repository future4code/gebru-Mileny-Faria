import React from 'react';
import CreatePlaylist from './components/CreatePlaylist';
import ListPlaylists from './components/ListPlaylists';




class App extends React.Component {

    

    render () {
      

        return (
          <div>
            <CreatePlaylist />
            <ListPlaylists />
          </div>
        )

    }

}

export default App;
