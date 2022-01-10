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
        //sresolve('ellie');
        reject(new Error('no network'))
    }, 2000);
})//object 생성

// 2. Consumers: then, catch, finally
promise.then((value)=>{ // 최종적으로 resolve라는 callback함수를 통해서 전달한 값이 value의 parameter 전달된 것을 알 수 있다.
    console.log(value);
})