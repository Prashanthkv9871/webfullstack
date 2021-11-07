import React, { Component } from 'react'
import ContactApp from './components/ContactApp';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Funcontactapp from './components/Funcontactapp';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Cart from './components/Cart';

export class App extends Component {
  render() {
    return (
      <div>
        <Router>      
         <Navbar/>
         <Switch>
           <Route path='/cart' component={Cart}/>
           <Route path="/contactapp" component={ContactApp} />
           <Route path="/funcontact" component={Funcontactapp} />
         </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
