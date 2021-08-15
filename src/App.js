import './App.css';
import { render } from '@testing-library/react';
import IngredientForm from './components/IngredientForm';
import RecipeCard from './components/RecipeCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ingredients from './components/ingredients'
import landingPage from './1-landing-page.jpg';
import Sketch1 from './components/Sketch1';
import Sketch2 from './components/Sketch2';

const App = () => {

  const [chosenIngredients, setChosenIngredients] = useState(ingredients);
  /*
  const addIngredients = (selectedIngredients) => {
    console.log(selectedIngredients);
    setChosenIngredients((prev) => selectedIngredients.slice(0));
  }
*/
  return (
    <div className = 'container'>
      <img src={landingPage} alt='landing' className="landingScreen" />
      <h2>Cater to Your Dietary Restrictions and Favorite Flavors</h2>
      <Sketch2 className="sketch2" />
      <IngredientForm />
    </div>
  )
}

export default App;