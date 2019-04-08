// console.log(this);


// // function test() {
// //   console.log(this);
// // }

// // test();



// var data = {
//   name: 'JD',
//   age: 99,
//   getName: function () {
//     // scope = where is your code nested?
//     console.log(this.name);
//   }
// };

// // data.getName();

// if (true) {
//   // if scope
// }



// $('#logo').on('click', function () {
//   // this = the parent object or the element(Object) that was clicked
//   // console.log($(this).text());
//   $(this).css('background', 'red');
// });


// var recipe1 = {
//   name: 'Sesame Chicken',
//   ingredients: ['1 cup Soy Sauce', '1 cup Sugar'],
//   instructions: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium ad provident maiores atque neque, aperiam ea necessitatibus temporibus eligendi deleniti nihil inventore doloremque laboriosam ipsa voluptas nam reiciendis repellendus!'
// };

// var recipe2 = {
//   name: 'Cheeseburger',
//   ingredients: ['Hamburger', 'Cheese', 'Bread'],
//   instructions: `Voluptatem praesentium ad provident maiores atque neque, aperiam ea necessitatibus temporibus eligendi deleniti nihil inventore doloremque laboriosam ipsa voluptas nam reiciendis repellendus!`
// };

// var recipes = [recipe1, recipe2];

// localStorage.setItem('recipes', JSON.stringify(recipes));

var recipes = JSON.parse(localStorage.getItem('recipes'));

// console.log(data);


// Loop through array of Recipes
for (var i = 0; i < recipes.length; i++) {
  var ingredients = '';


  for (var j = 0; j < recipes[i].ingredients.length; j++) {
    // ingredients += `<li>${recipes[i].ingredients[j]}</li>`;
    ingredients += '<li>' + recipes[i].ingredients[j] + '</li>';
  }


  $('.recipes').append(
    `<div class="recipe">
      <h4>${recipes[i].name}</h4>
      <ul>
        ${ingredients}
      </ul>
    </div>`
  );

}





// var fruits = ['apple', 'orange', 'grape'];

// console.log(fruits[2])



// Parent Loop
// i
// Child Loop
// j



// var str = 'This is my string';

// var another = ' and this is another string';

// var together = str + another;

// together += ' something else';
// together += ' and one more';

// console.log(together);



// var name = 'Bob';

// var str = 'My name is ' + name;
// var str = `My name is ${name}`;

// console.log(str);


// Hi ${first_name},

// I'm writing to you about something. 

// Bye!






// $.ajax({
//   url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
// })
//   .then(function (data) {
//     console.log(data)
//   });




// function test() {
//   return { name: 'JD', then: function () { console.log('Yes! We know some advanced JS!') } };
//   // no code is going to run down here
// }


// var result = test(); //whatever value you handed back out;

// console.log(result.name);
// result.then();