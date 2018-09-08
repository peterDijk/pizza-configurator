import React, { Component } from 'react';
import ConfiguratorContainer from './components/ConfiguratorContainer'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              NewAgePizza.com - Pizza Configurator !
            </Typography>
          </Toolbar>
        </AppBar>
        <ConfiguratorContainer />
      </div>
    );
  }
}

export default App;

