//1. Object to JSON
//Stringify
let json = JSON.stringify(true);
console.log(json);

json2 = JSON.stringify(['apple', 'banana']);
console.log(json2);

//Object to JSON
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol("id"), // javascript에만 있는 특별한 데이트도 JSON으로 포함되지 않는다.
    jump: ()=>{            // jump라는 함수는 object에 있는 데이터가 아니기 때문에 제외된다.
        console.log(`${this.name} can jump!`)
    },
};
//원하는 목록을 만들어서 해당하는 property만 JSON으로 변환된다.
json3 = JSON.stringify(rabbit, ["name"]);
console.log(json3);

//좀 더 세밀하게 통제하고 싶을 때 callback 함수를 사용한다
json4 = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});
console.log(json4);
//2. JSON to Object
//parse

console.clear();
const rabbit1 = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbol: Symbol("id"), // javascript에만 있는 특별한 데이트도 JSON으로 포함되지 않는다.
    jump: ()=>{            // jump라는 함수는 object에 있는 데이터가 아니기 때문에 제외된다.
        console.log(`${this.name} can jump!`)
    },
};
json5 = JSON.stringify(rabbit1);
const obj = JSON.parse(json5, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date() : value;
});
console.log(obj);
rabbit1.jump();//jump라는 함수는 JSON.stringify()를 통해 이미 JSON에 포함되어있지 않기 때문에 serialized가 되지 않은 것들은 다시 JSON.parse()로 다시 object를 만든다고 하더라도 포함되지 않는다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());