import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
import ingredients from './ingredients';

const IngredientForm = ({ onAdd }) => {
  const [selected, setSelected] = useState([]);
  const showSelectAll = false;

  const addIngredients = (selected) => {
    //console.log(selected);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(selected);


  }

  return (
    <form onSubmit={onSubmit}>
      <h1>Select Ingredients</h1>
      <MultiSelect
        hasSelectAll={showSelectAll}
        options={ingredients}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
      <input type='submit' value='Add Ingredients' />
    </form>
  );
};

export default IngredientForm;