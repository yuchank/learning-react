import IngredientList from './ingredientList';
import Instructions from './instructions';

const Recipe = ({ name, ingredients, steps }) => 
  <section id={ name.toLowerCase().replace(/ /g, '-') }>
    <h1>{ name }</h1>
    <IngredientList list={ ingredients }/>
    <Instructions title="Cooking Instructions" steps={steps}/>
  </section>

export default Recipe;