import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './Navbar';
import Contactapp from './components/ContactApp';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/contactapp' Component={Contactapp} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
