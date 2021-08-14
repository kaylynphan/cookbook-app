import './App.css';
import { render } from '@testing-library/react';
import recipes from './components/data';
import IngredientForm from './components/IngredientForm';
import Sketch from 'react-p5';
import RecipeResults from './components/RecipeResults';

var chosenIngredients = [];

const App = () => {
  
  const addIngredients = (selectedIngredients) => {
    console.log(selectedIngredients);
    chosenIngredients = selectedIngredients;
  }

  let a = 300;
  let b = 300;
  let setup = (p5, canvasParentRef) => {
    //Canvas of size 1000x800 
    let xyz = p5.createCanvas(800, 600).parent(canvasParentRef);
  };
  let draw = (p5) => {
    p5.background("rgb(80%,80%,80%)");
    p5.stroke(0);
    p5.text("This window is where the recipe walkthrough will be", 20, 20);
  };

  return (
    <div className = 'container'>
      <IngredientForm onAdd={addIngredients}/>
      <Sketch setup={setup} draw={draw} className="App" />
    </div>
  )
}

export default App;