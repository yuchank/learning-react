$(document).ready(function () {
  var dish = React.createElement('section', {id: 'baked-salmon'},
    React.createElement('h1', null, 'Baked Salmon'),
    React.createElement('ul', {'className': 'ingredients'},
      React.createElement('li', null, '1 lb Salmon'),
      React.createElement('li', null, '1 cup Pine Nuts'),
      React.createElement('li', null, '2 cups Butter Lettuce'),
      React.createElement('li', null, '1 Yellow Squash'),
      React.createElement('li', null, '1/2 cup Olive Oil'),
      React.createElement('li', null, '3 cloves of Garlic')
    ),
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
  ReactDOM.render(dish, document.getElementById('react-container'));
});

