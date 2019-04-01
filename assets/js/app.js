// var recipes = JSON.parse(localStorage.getItem('recipes'));

// console.log(recipes);




var ingredients = [];

function showModal() {
  $('.recipe-modal').css('display', 'flex');
}

function hideModal() {
  $('.recipe-modal').hide();
}

function addIngredient(event) {
  event.preventDefault();

  var ingredientValue = $('#add').val();

  ingredients.push(ingredientValue);

  $('.pending-ingredients').html('');

  for (var i = 0; i < ingredients.length; i++) {
    $('.pending-ingredients').append('<li>' + ingredients[i] + '</li>');
  }
}

function saveRecipe(event) {
  event.preventDefault();

  var nameValue = $('#name').val();
  var instructionsValue = $('#instructions').val();
  var ingredientValue = $('#add').val();

  console.log(ingredientValue);

}


function init() {
  $('#open-modal').on('click', showModal);
  $('.close-modal').on('click', hideModal);
  $('.add').on('click', addIngredient);
  $('#save').on('click', saveRecipe);
}

init();