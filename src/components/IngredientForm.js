import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import ingredients from './ingredients';
import RecipeCard from './RecipeCard';

const IngredientForm = () => {
  const [selected, setSelected] = useState([]);
  const showSelectAll = false;

  return (
    <div>
      <h1>What Ingredients Do You Have Today?</h1>
      <MultiSelect
        hasSelectAll={showSelectAll}
        options={ingredients}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
      <h2>Recipes Recommended For You</h2>
      <RecipeCard chosen_ings={selected} />
    </div>
  );
};

export default IngredientForm;