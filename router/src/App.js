import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Prompt} from 'react-router-dom';

import  Home  from './components/Home';
import  About  from './components/About';
import  Contact  from './components/Contact';
import  Error  from './components/Error';
import  Navigation  from './components/Navigation';
import  User  from './components/User';

class App extends Component {
  state = {
    loggedIn: false
  }

  loginHandle = () => {
    this.setState(prevState => ({
      loggedIn:  !prevState.loggedIn
    }))
  }
  render() {
    return (
     <BrowserRouter>
      <div>
        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/user/:username" render={({match}) => (
              this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/"/>)
            )} />
            <Route component={Error} />
          </Switch>
        <input type="button" value={this.state.loggedIn ? "log out" : "log in"} onClick={this.loginHandle.bind(this)}></input>
        <Prompt
          when={!this.state.loggedIn}
          message={(location)=>{
            return location.pathname.startsWith('/user') ? 'Are you sure you want to leave this page' : true
          }}
        />
      </div>
     </BrowserRouter>
    );
  }
}

export default App;
