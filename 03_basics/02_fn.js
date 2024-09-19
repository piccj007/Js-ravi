function claulate(...n) {
    return n
}
console.log(claulate(1,2,3,4,5));
const obj1 = {username : "Ravi",
    password : "ravi1123"
}
function obj(params) {
    console.log(`user name : ${params.username} and password is ${params.password} `);    
}
const arr1 = [1,2,3]
function arr(params) {
    return params[1]
}
obj(obj1)
console.log(arr(arr1));
