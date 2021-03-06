'use strict';

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['π', 'π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

// 3. Looping over an array
//print all fruits

// b. for of
for(let value of fruits){
    console.log(value);
} 

// c. forEach
fruits.forEach((value) => console.log(fruits));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('π','π');
console.log(fruits);
//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('π‘','π€¬');
console.log(fruits);
//shift: delet an item to the beginning
fruits.shift();
console.log(fruits);
//note!! shift, unshift are slower than pop, push

//splice: remove an item by index position
fruits.splice(1, 1, "π¨", 'π±');
console.log(fruits);

//combine two arrays
const fruits2 = ['π€©', 'π€'];//fruits2κ° fruits λ€λ‘ κ°λ€
const newFruits = fruits.concat(fruits2);//
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits.indexOf('π€'));
console.log(fruits.includes('π₯°'));
console.log(fruits.indexOf('π'));

// lastIndexOf
fruits.push('π');
console.log(fruits.indexOf('π'));//κ²ΉμΉλ κ°μ λ§¨μμ μλ indexλ₯Ό νμν΄μ€λ€
console.log(fruits.lastIndexOf('π'));//κ²ΉμΉλ κ°μ λ§μ§λ§μ μλ indexλ₯Ό νμν΄μ€λ€

