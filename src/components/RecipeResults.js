// in progress
import recipes from './data';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
const RecipeResults = (chosenIngredients) => {

    let filteredRecipes = [];
    for (let recipe of recipes) {
        if (match(recipe)) {
            filteredRecipes.push(recipe);
        }
    }

    function match(recipe) {
        for (let ingredient of recipe.ingredients) {
            for (let chosenIngredient of chosenIngredients) {
                if (ingredient.item === chosenIngredient.value) {
                    return true;
                }
            }
        }
        return false;
    }


    
    /*let filteredRecipes = recipes.filter(
        function (currentElement) {
            for (let chosen_ing of Object.entries(chosenIngredients)) {
                for (let used_ing of Object.entries(currentElement.ingredients)) {
                    if (used_ing.item === chosen_ing.value()) {
                        return true;
                    }
                }
            }
            return false;
        }
    );*/
    
    return (
      <div>Recipe List</div>
    );
}

export default RecipeResults