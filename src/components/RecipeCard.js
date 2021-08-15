import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import recipes from './recipes';

const RecipeCard = ({chosen_ings}) => {

    RecipeCard.defaultProps = {
        chosen_ings: recipes
    }

    RecipeCard.propTypes = {
        chosen_ings: PropTypes.array
    }

    console.log("Chosen ingredients:");
    console.log(chosen_ings);

    let cardInfo = [];

    for (let recipe of recipes) {
        if (matchAll(recipe)) {
            cardInfo.push(recipe);
        }
    }
    console.log("Filtered recipes:");
    console.log(cardInfo);


    //returns true if all ingredients can be found in a recipe
    function matchAll(recipe) {
        for (let chosen_ing of chosen_ings) {
            if (!match(recipe, chosen_ing)) {
                return false;
            }
        }
        return true;
    }

    //returns true if the given ingredient can be found in the given recipe
    function match(recipe, chosen_ing) {
        for (let used_ing of recipe.ingredients) {
            if (chosen_ing.value === used_ing.item) {
                return true;
            }
        }
    }

    const renderCard = (card, index) => {
        return (
          <Card style={{ width: '18rem' }} key={index}>
            <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>
                    {card.cusine} Cusine
                </Card.Text>
                <Button variant="primary">Start Cooking</Button>
            </Card.Body>
          </Card>
        )
    }
    return (
        <div className="recipeCard">{cardInfo.map(renderCard)}</div>
    )
}

export default RecipeCard;