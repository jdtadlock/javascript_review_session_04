function one() {

}

var something = function () {
  console.log('test');
}

var data = {
  name: 'JD',
  age: 39,
  getAge: function () {
    console.log(this.age);
  }
}

// var myVar;

// console.log(myVar);


function mySpecialFunction(easy, callback) {
  // console.log(callback);

  callback();
}

// mySpecialFunction(10, function () {
//   console.log('what the heck');
// });


// function add(a, b) {
//   var sum = a + b;
//   console.log(a * b * ' and something else');
// }

// add('something', 20);

// var someString = 'My before string';



