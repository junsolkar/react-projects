import React, {Component} from 'react';
import './App.css';
import {recipes} from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';


class App extends Component {
  state = {
    recipes:[],
    url: "https://www.food2fork.com/api/search?key=5a84e3f5e7686b5a63954ee059213ae8"
  }
  async getRecipes(){
      try {
        const data = await fetch(this.state.url)
        const jsonData =  await data.json()
    
        this.setState({
          recipes: jsonData.recipes
        });
      }catch (error){
        console.log(error)
      }
  }

  componentDidMount(){
    this.getRecipes()
  }

  render(){
    console.log(this.state.recipes)
    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
