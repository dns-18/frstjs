//  Promises are type of object

const promiseOne = new Promise(function(resolve,reject){
    // Performs Async Task - Database calls,cryptography,network
    setTimeout(function(){
        console.log('Async Task Done');
        resolve({username : "DNS", email: "dns@1111.com"})
    },1000)
})
promiseOne.then(function(user){
    console.log(user);
})

const promiseTwo = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "DNS", phone: "9862345521"})
        }else{
            reject('Error Occured!')
        }
    },1000)
})
promiseTwo.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log('Error Occured');
}).finally(()=>{
    console.log('Promises are either get resolved or rejected');
})

const promiseThree= new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Js", phone: "9862345521"})
        }else{
            reject('Error Occured!')
        }
    },1000)
})

//     Use of Aync Function (Another Method To Resolve Promises)
async function consumePromiseThree() {
    try {
        const response = await promiseThree
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseThree()



async function getAllUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json()  // DATA IS CONVERTED FROM STRING TO AN OBJECT
        console.log(data);
        
    } catch (error) {
        console.log('E :',error);
        
    }
}
getAllUser()
