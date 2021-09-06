

// const isMomHappy = true;

// // Promise
// const willIGetNewPhone = new Promise(
//     (resolve, reject) => { // fat arrow
//         if (isMomHappy) {
//             const phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//             const reason = new Error('mom is not happy');
//             reject(reason);
//         }

//     }
// );

// // 2nd promise
// const showOff = function (phone) {
//     const message = 'Hey friend, I have a new ' +
//                 phone.color + ' ' + phone.brand + ' phone';
//     return Promise.resolve(message);
// };

// // call our promise
// const askMom = function () {
//     willIGetNewPhone
//         .then(showOff)
//         .then(fulfilled => console.log(fulfilled)) // fat arrow
//         .catch(error => console.log(error.message)); // fat arrow
// };

// askMom();


var a=6;
var b=3;
let program=new Promise((resolve,reject)=>{
    if (a>b){
        resolve("a is greter")
    }else{
        reject("false")
    }})
program.then((message)=>{
    console.log(message)})

.catch((error)=>{
    console.log(error)
})


console.log("*************")
const add=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)},2000
        )
    })
}
add(5,6).then((sum)=>{
    console.log(sum)
    })
    .catch((error)=>{
        console.log(error)
    
})

