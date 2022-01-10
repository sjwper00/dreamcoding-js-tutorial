// JavaScript is synchronous
// Execute the code block by orger after hoisting
//hoisting: var, function declaration 

// asyncrhonous example
console.log('1');//동기
setTimeout(() => console.log('2'), 1000);//비동기
console.log('3');//도기
//여기서 synchronous로 순선대로 진행하다가, setTimeout은 browser API니까 broser한테 보낸다.
//그리고 browser한테 보낸 뒤, 응답을 기다리지 않고 바로 console.log로 넘어가게 된다.

//Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('hello'));//동기
//Syncrhonous callback 특성상 function printImmdediately는 맨 위로 올렸을 것이다. 그리고 console.log, setTimeout, console.log printImmdiately() 순으로 진행했지만,
//
//Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'),2000);//비동기

//Callback hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream')||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }   else {
                onError(new Error('not found'));
            }
        }, 2000);
    }


    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if ( user === 'ellie'){
                onSuccess({name:'ellie', role: 'admin'})
            }   else{
                onError(new Error('no access'));
            }
        }, 1000);
            
    }
} 