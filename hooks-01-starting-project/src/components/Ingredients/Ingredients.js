import React,{useState} from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients() {
  const [userIngredients,setUserIngredients]=useState([]);
const addIngredientHandler=ingredient=>{
    fetch('https://react-hooks-update-39498.firebaseio.com/ingredients.json',
        {
            method:'POST',
            body:JSON.stringify(ingredient),
            headers:{'Content-Type':'application/json'}

        }).then(response=> {
        return response.json();
    }).then(responseDate=>{
        setUserIngredients(prevIngredients=>[
            ...prevIngredients,
            {id:responseDate.name, ...ingredient}
        ]);
    });
};
const removeIngredientHandler=ingredientId=>{
    setUserIngredients(prevIngredients=>{
        prevIngredients.filter(ingredient=>ingredient.id!==ingredientId);
    });
};
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search />
<IngredientList
ingredients={userIngredients}
onRemoveItem={removeIngredientHandler}
/>
      </section>
    </div>
  );
}

export default Ingredients;
