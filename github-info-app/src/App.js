import React from 'react';
import './App.css';
import axios from 'axios'

import UserForm from './components/UserForm'

class App extends React.Component{
  state = {
    name: null,
    company: null,
    bio: null,
    location: null,
    repos: null
  }

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    if (user) {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        const name = res.data.name;
        const company = res.data.company;
        const bio = res.data.bio;
        const location = res.data.location;


        this.setState({
          repos,
          name,
          company,
          bio,
          location
        })
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
        {this.state.name ? <p>name : {this.state.name}</p> : <p></p>}
        {this.state.company ? <p>company : {this.state.company}</p> : <p></p>}
        {this.state.bio ? <p>bio : {this.state.bio}</p> : <p></p>}
        {this.state.location ? <p>location : {this.state.location}</p> : <p></p>}

      </div>
    );
  }

}

export default App;
