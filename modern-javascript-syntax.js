// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const newNums = nums.map((num) => {
  return (num * 2)
})

// console.log(newNums)

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings

// console.log(firstTopping)
// console.log(secondTopping)

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
  make: 'Audi',
  model: 'q5',
};

// Your code here
const { make, model } = car

// console.log(make)
// console.log(model)

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// Your code here
const controversialPizzaToppings = [...pizzaToppings]
// console.log(controversialPizzaToppings)

// Duplicate the following object and spread its values into a new variable `myCar`.

// Change the `model` property of `myCar` to 'q7'. Log both objects.


// Your code here

const myCar = {...car}

myCar.model = 'q7'

// console.log(car)
// console.log(myCar)

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const userProfile = {
  username: 'bnaaaa',
  age: 30,
  email: 'email@email.com',
}

const propertyName = 'email'


// console.log(userProfile[propertyName])


// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const values = (noun='cat', adjective='white') => {
  return `The ${noun} is ${adjective}`
}

// console.log(values())
// console.log(values('dog','black'))


// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  // console.log('yum');
} else {
  // console.log('yuck');
}

// Your code here

// console.log(pizza === 'tasty' ? 'yum' : 'yuck')
