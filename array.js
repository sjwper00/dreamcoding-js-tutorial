'use strict';

// Array
// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['😄', '😜'];
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
fruits.push('😇','😎');
console.log(fruits);
//pop: remove an item from the end
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('😡','🤬');
console.log(fruits);
//shift: delet an item to the beginning
fruits.shift();
console.log(fruits);
//note!! shift, unshift are slower than pop, push

//splice: remove an item by index position
fruits.splice(1, 1, "😨", '😱');
console.log(fruits);

//combine two arrays
const fruits2 = ['🤩', '🤓'];//fruits2가 fruits 뒤로 간다
const newFruits = fruits.concat(fruits2);//
console.log(newFruits);

// 5. Searching
// find the index
console.log(fruits.indexOf('🤓'));
console.log(fruits.includes('🥰'));
console.log(fruits.indexOf('😇'));

// lastIndexOf
fruits.push('😇');
console.log(fruits.indexOf('😇'));//겹치는 값은 맨앞에 있는 index를 표시해준다
console.log(fruits.lastIndexOf('😇'));//겹치는 값은 마지막에 있는 index를 표시해준다

