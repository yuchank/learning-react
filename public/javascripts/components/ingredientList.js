import Ingredient from './ingredient';

const IngredientList = ({ list }) => 
  <ul className="ingredients">
    { list.map((ingredient, i) => <Ingredient key={ i } {...ingredient} />)}  
  </ul>;

export default IngredientList;