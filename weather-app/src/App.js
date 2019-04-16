import React from "react";
import Titles from "./components/Titles"
import Form from "./components/Form"
import Weather from "./components/Weather"

const API_KEY = "889a5ef41ebfe5408f85f8b1883567dd";
class App extends React.Component{
  getWeather = async (e) => {
    e.preventDefault();

    const api_call = await fetch(`http://openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`, {mode: "no-cors"})
    
    const data = await api_call.json();

    console.log(data)
  }
  render(){
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App;