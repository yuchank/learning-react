const items = [
  '1 lb Salmon',
  '1 cup Pine Nuts',
  '2 cups Butter Lettuce',
  '1 Yellow Squash',
  '1/2 cup Olive Oil',
  '3 cloves of Garlic'
];

// 1. React and ReactDOM
// const dish = React.createElement('h1', { id: 'recipe-0', 'data-type': 'title'}, 'Baked Salmon');
// ReactDOM.render(dish, document.getElementById('react-container'));

// 2. component tree
// const dish = React.createElement('section', { id: 'baked-salmon' }, 
//   React.createElement('h1', null, 'Baked Salmon'),
//   React.createElement('ul', { className: 'ingredients' }, 
//     React.createElement('li', null, '1 lb Salmon'),
//     React.createElement('li', null, '1 cup Pine Nuts'),
//     React.createElement('li', null, '2 cups Butter Lettuce'),
//     React.createElement('li', null, '1 Yellow Squash'),
//     React.createElement('li', null, '1/2 cup Olive Oil'),
//     React.createElement('li', null, '3 cloves of Garlic')
//   ),
//   React.createElement('section', { className: 'instuctions' }, 
//     React.createElement('h2', null, 'Cooking Instructions'), 
//     React.createElement('p', null, 'Preheat the oven to 350 degrees.'),
//     React.createElement('p', null, 'Spread the olive oil around a glass baking dish.'),
//     React.createElement('p', null, 'Add the salmon, garlic, and pine nuts to the dish.'),
//     React.createElement('p', null, 'Bake for 15 minutes.'),
//     React.createElement('p', null, 'Add the yellow squash and put back in the oven for 30 mins.'),
//     React.createElement('p', null, 'Remove from oven and let cool for 15 minutes. Add the lettuce and serve.')
//   )
// );
// ReactDOM.render(dish, document.getElementById('react-container'));

// 3. using data
// const dish = React.createElement('ul', { className: 'ingredients' }, items.map((ingredient, i) => React.createElement('li', { key: i }, ingredient)));
// ReactDOM.render(dish, document.getElementById('react-container'));

// 4. React component 
// 4.1.1 createClass deprecated : DO NOT USE
// const IngredientsList = React.createClass({
//   displayName: 'IngredientsList',
//   render() {
//     return React.createElement('ul', { className: 'ingredients' }, 
//         React.createElement('li', null, '1 lb Salmon'),
//         React.createElement('li', null, '1 cup Pine Nuts'),
//         React.createElement('li', null, '2 cups Butter Lettuce'),
//         React.createElement('li', null, '1 Yellow Squash'),
//         React.createElement('li', null, '1/2 cup Olive Oil'),
//         React.createElement('li', null, '3 cloves of Garlic')
//     )
//   }
// });
// const list = React.createElement(IngredientsList, null, null);
// ReactDOM.render(list, document.getElementById('react-container'));

// 4.1.2 createClass deprecated : this keyword and this.props : DO NOT USE
// const IngredientsList = React.createClass({
//   displayName: 'IngredientsList',
//   render() {
//     return React.createElement('ul', { className: 'ingredients' },
//       this.props.items.map((ingredient, i) => React.createElement('li', { key: i }, ingredient)));
//   }
// });
// ReactDOM.render(React.createElement(IngredientsList, { items }, null), document.getElementById('react-container'));

// 4.1.3. createClass deprecated : MVC idea : DO NOT USE
// const IngredientsList = React.createClass({
//   displayName: 'IngredientsList',
//   renderListItem(ingredient, i) {
//     return React.createElement('li', { key: i }, ingredient);
//   },
//   render() {
//     return React.createElement('ul', { className: 'ingredients' },
//       this.props.items.map(this.renderListItem));
//   }
// });
// ReactDOM.render(React.createElement(IngredientsList, { items }, null), document.getElementById('react-container'));

// 4.2. ES6 class syntax: React.Component
// class IngredientsList extends React.Component {
//   renderListItem(ingredient, i) {
//     return React.createElement('li', { key: i }, ingredient);
//   }
//   render() {
//     return React.createElement('ul', { className: 'ingredients' },
//       this.props.items.map(this.renderListItem));
//   }
// }
// ReactDOM.render(React.createElement(IngredientsList, { items }, null), document.getElementById('react-container'));

// 4.3. stateless functional components: do not have a 'this' scope
// const IngredientsList = props => React.createElement('ul', { className: 'ingredients' }, props.items.map((ingredient, i) => React.createElement('li', { key: i }, ingredient)));
// ReactDOM.render(React.createElement(IngredientsList, { items }, null), document.getElementById('react-container'));

// 4.3.1. destructuring the properties argument : { items } = props
// const IngredientsList = ({ items }) => React.createElement('ul', { className: 'ingredients' }, items.map((ingredient, i) => React.createElement('li', { key: i }, ingredient)));
// ReactDOM.render(React.createElement(IngredientsList, { items }, null), document.getElementById('react-container'));

// factories
// React.DOM.h1(null, 'Baked Salmon');          // deprecated
// React.DOM.ul({ className: 'ingredients' },   // deprecated
//   React.DOM.li(null, 'lb Salmon'),
//   React.DOM.li(null, '1 cup Pine Nuts'),
//   React.DOM.li(null, '2 cups Butter Lettuce'),
//   React.DOM.li(null, '1 Yellow Squash'),
//   React.DOM.li(null, '1/2 cup Olive Oil'),
//   React.DOM.li(null, '3 cloves of Garlic'));
// var dish = React.DOM.ul({ className: 'ingredients '}, items.map((ingredient, i) => React.DOM.li({ key }, ingredient))); // deprecated
// ReactDOM.render(dish, document.getElementById('react-container'));

const { render } = ReactDOM;

const IngredientsList = ({ items }) => React.createElement('ul', null, items.map((ingredient, i) => React.createElement('li', { key: i }, ingredient)));

const Ingredients = React.createFactory(IngredientsList);

// const list = React.createElement(IngredientsList, null, null);
ReactDOM.render(React.createElement(IngredientsList, { items }, null), document.getElementById('react-container'));

var dish = React.createElement('section', {id: 'baked-salmon'},
  React.createElement('h1', null, 'Baked Salmon'),
  Ingredients({ items }),
  React.createElement('section', {'className': 'instructions'},
    React.createElement('h2', null, 'Cooking Instructions'),
    React.createElement('p', null, 'Preheat the oven to 350 degrees.'),
    React.createElement('p', null, 'Spread the olive oil around a glass baking dish.'),
    React.createElement('p', null, 'Add the salmon, garlic, and pine...'),
    React.createElement('p', null, 'Bake for 15 minutes.'),
    React.createElement('p', null, 'Add the yellow squash and put...'),
    React.createElement('p', null, 'Remove from oven and let cool for 15 ....')
  )
);
render(dish, document.getElementById('react-container'));
