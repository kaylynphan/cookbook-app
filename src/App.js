import logo from './logo.svg';
import './App.css';
import recipes from './components/data';
import IngredientForm from './components/IngredientForm';
import { render } from '@testing-library/react';

var chosenIngredients = [];

const App = () => {
  
  const addIngredients = (selectedIngredients) => {
    console.log(selectedIngredients);
    chosenIngredients = selectedIngredients;
  }

  return (
    <div className = 'container'>
      <IngredientForm onAdd={addIngredients}/>
    </div>
  )
}

export default App;