// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 

""""
1 + 2 = ${1+2}`);
console.log('ellie\'s book');
console.log("ellie's book");
console.log('ellie\'s \nbook');

// 2. Numeric oeprators
console.log(1+1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(2 % 3); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement oeprators
let counter = 2;
const preIncrement = ++counter; 
// counter = counter + 1
// preIncrement = counter;
console.log(`preIncrement = ${preIncrement} counter = ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement = ${postIncrement} counter = ${counter}`);
//postIncrement = counter;
// counter = counter + 1;

// 4. Assignment oeprators
let x =3;
let y = 6;
x +=y; // x = x+y;

// 6. Losgical operators: ||(or), &&(and), !(not) 

const value1 = false;
const value2 = 4<2;

console.log(`or: ${value1}||${value2}||${check()}`); //or, and 연산자는 하나라도 true면  그 연산은 true로 보기 때문에 가변운 연산자부터 앞에서부터 가장 무거운 연산자를 뒤에 두는게 바람직한 코딩

function check(){
    for (let i =0; 1<10; i++){
        console.log("lame");
    }
    return true;
}

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); //true
console.log(stringFive != numbrFive); // ture

// === strick equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numbrFive); //false

// object equality by reference
const ellie1 = {name: "ellie1"};
const ellie2 = {name: "ellie1"};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

// 8. Conditional oeprators: if
const by = 'ellie';

if (by == 'ellie'){
    console.log('wlecome, Ellie!');
}   else if (by === 'coder'){
    console.log('You are amazing coder');
}   else    {
    console.log('unknown');
}

// 9. Ternary oeprator: ?
//condition ? value1 : value2;
console.log(by === 'ellie'? "yes" : "no"); //간단한 if문일 때 사용하는 걸 추천

// 10. swtich statement
// use for multiple if check
// use for enum-like value chekc
// use for multiple type checks in TS
const browser = "ie";
switch(browser){
    case "ie":
        console.log("go away!");
        break;
    case 'chrome'://console.log 출력값이 동일하다면 다음과 같이 붙여쓴다
    case 'firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}
ㅈ
// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i =3;
while(i>0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
//then check the condition
do{
    console.log(`do while: ${i}`);
    i--;
}   while(i>0); 

// for loop, for(begin; condition; step)

for(let i = 3; i<10; i++){
    console.log(`inline variable for: ${i}`);
}
// neted loop

for(let i = 0; i<10; i++){
    for(let j = 0 ; j<10 ; j++){
    console.log(`i: ${i}, j: ${j}`);
    }
} // 총 100가지 경우
