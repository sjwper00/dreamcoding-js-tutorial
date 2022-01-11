'use strict';

//Promise is a JavaScrip object for asynchronous operation.
//1. state를 이해하는게 중요 state: pending(수행 중) -> fulfilled(수행완료) or rejected(문제발생)
//2. data의 producer, consumer 차이점 이해하기

//1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(ex network, read files, 이렇게 시간이 오래 걸리는 작업들이 완료될 때까지 다음 작업이 대기되어야하기 때문에 promise로 비동기적으로 처리하는게 좋다
    console.log('doing something...');
    setTimeout(()=>{
        //resolve('ellie');
        reject(new Error('no network'))//new Error()는 error가 발생했다는 걸 나타내는 object
    }, 2000);
});//object 생성

// 2. Consumers: then, catch, finally
promise.then(value=>{ // 최종적으로 resolve라는 callback함수를 통해서 전달한 값이 value의 parameter 전달된 것을 알 수 있다.
    console.log(value);
})
.catch(error => {   //catch()를 통해 error가 나타났을 때 handling하는 callback함수를 등록한다
    console.log(error);
})
.finally(()=>{console.log('finally')});//resolve든 reject든 어떤 기능을 마지막으로 수행하고 싶을 때는 finally를 사용한다

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=> resolve(1), 1000);
})

fetchNumber 
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000);
    });
})
.then(num => console.log(num));