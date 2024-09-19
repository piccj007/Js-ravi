// const user = new Object(); singaltant
const user = {
    name: "ravi",
    "full name": "rVS",
   // [mysym] : "mykey1",
    age:34,
    location : "Talod",
    email: "r@gmail.com",
    isloggedin:false,
    lastLogin : ["a","b"]
}
const Reuser = {
    fullname: {username : {firstName: "ravi"}},
    email: "r@gmail.com",
    isloggedin:false,
    lastLogin : ["a","b"]
}
const onj1= {1:"a",2:"b"}
const onj2= {3:"a",4:"b"}
// const obj3 = {onj1,onj2}
// const obj3 = Object.assign({},onj1,onj2)
 const obj3 = {...onj1,...onj2}

console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));
console.log(obj3.hasOwnProperty('5'));


