import React, {Component} from 'react';
import Burger from "./Components/Burger/Burger";
import './App.css';
import Price from "./Components/Price/Prais";
class App extends Component {
state = {
  ingredients : [
      {name: 'Meat', count: 0},
      {name: 'Cheese', count: 0},
      {name: 'Salad', count: 0},
      {name: 'Bacon', count: 0},
  ],
  totalPrice : 20,
};

addIngredient = (ingrIndex)=> {

  let ingredients = [...this.state.ingredients];
  let totalPrice = this.state.totalPrice;
  const ingredientIndex = ingredients.findIndex(index => index.name === ingrIndex.name);
    ingredients[ingredientIndex].count++;
        totalPrice += ingrIndex.price;
        this.setState( {ingredients,totalPrice});
};
removeIngredient =(ingrIndex) =>{
    let ingredients = [...this.state.ingredients];
    let totalPrice = this.state.totalPrice;
    const ingredientIndex = ingredients.findIndex(index => index.name === ingrIndex.name);
    ingredients[ingredientIndex].count--;
    totalPrice -= ingrIndex.price;
    this.setState( {ingredients,totalPrice});
};
  render() {
    return (
        <div className="App">
          <Price
              clickRemove={this.removeIngredient}
              addIngredient={this.addIngredient}
              ingredientsApp={this.state.ingredients}

          />

          <Burger
              ingredientsApp={this.state.ingredients}
              totalPriceApp={this.state.totalPrice}
          />


        </div>
    );
  }
}

export default App;
