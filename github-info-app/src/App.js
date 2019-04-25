import React from 'react';
import './App.css';
import axios from 'axios'

import UserForm from './components/UserForm'

class App extends React.Component{
  state = {
    repos: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        this.setState({repos})
      })
    } else return
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Github Info App</h1>
        </header>
        <UserForm getUser={this.getUser} />
        {this.state.repos ? <p>number of repos is : {this.state.repos}</p> : <p>please enter a username</p>}
      </div>
    );
  }

}

export default App;
