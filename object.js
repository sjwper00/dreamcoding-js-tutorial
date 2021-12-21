// 1. Literals and properties

//object = {key: value,,,}; key와 value의 집합체
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

const name = "ellie"; //변수 하나 당 값을 하나씩 밖에 부여하지 못한다.
const age = 4;
print(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}
const ellie = {name: 'ellie', age : 4}

ellie.hasJob = true ; // javascript Runtime으로 작동하기 때문에 object에 추가로 value를 추가할 수 있다, 다만, 유지 보수 면에서 불리하다
delete ellie.hasJob

// 2. Computed properties
console.log(ellie.name);
console.log(ellie["ellie"]); // key should be always string, 실시간으로 원하는 key의 값을 받아오고 싶다면 computed properties를 사용한다
ellie['hasJob'] = true ;
console.log(ellie.hasJob);

function printValeu(obj, key){
    console.log(obj[key]);
}//   동적으로 key의 value값을 가져올 때 사용한다.
printValue(ellie, 'name');

// 3. Property value shorthand
const person1 = {name:, age:};
const person2 = {name:, age:};
const person3 = {name:, age:};
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. constructor function like class constructor
function Person(name, age){
    //this = {};
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check(key in obj)
console.log('name' in ellie);

// 6. for..in(모든 key 가져오기) vs for..of(모든 value가져오기)
//for (key in obj)
for(key in ellie){
    console.log(key);
}//ellie 안에 있는 모든 key들이 key라는 지역변수에 보낸다. 모든 key들을 받아와서 처리하고 싶을 때 사용

// for (value of iterable)
// 배열의 모든 value를 가져오는 방법
const array = [1, 2, 3, 4];
for(let i = 0; i<array.length ; i++){
    console.log(array[i]);
}
for(value of array){
    console.log(value );
}

// 7. cloning

const user = {name: 'ellie', age: '20'};
const user2 = user;

const user4 = Object.assign({}, user);
consolelog(user4);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);//assign에서 뒤에 있는 배열의 key의 value가 앞에 있는 배열의 동일한 key의 value를 덮어버린다.            
console.log(mixed.color);
console.log(mixed.size);
