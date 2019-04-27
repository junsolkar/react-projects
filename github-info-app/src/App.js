import React from 'react';
import './App.css';
import axios from 'axios'

import UserForm from './components/UserForm'
import Profile from "./components/Profile"

class App extends React.Component{
  state = {
    name: undefined,
    company: undefined,
    bio: undefined,
    location: undefined,
    repos: undefined,
    url: undefined,
    avatar: undefined
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
        const url = res.data.html_url;
        const avatar = res.data.avatar_url

        this.setState({
          repos,
          name,
          company,
          bio,
          location,
          url,
          avatar
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
        <Profile
          repos={this.state.repos}
          name={this.state.name}
          company={this.state.company}
          bio={this.state.bio}
          location={this.state.location}
          url={this.state.url}
          avatar={this.state.avatar}
        />
      </div>
    );
  }

}

export default App;
