//console.log("ravi object");
const mysym = Symbol("key")
const user = {
    name: "ravi",
    "full name": "rVS",
    [mysym] : "mykey1",
    age:34,
    location : "Talod",
    email: "r@gmail.com",
    isloggedin:false,
    lastLogin : ["a","b"]
}
// console.log(user.email);
// console.log(user["full name"]);
// console.log(user[mysym]);
// console.log(typeof user[mysym]);

user["full name"] = "ravi vishnubhai suthar"
//Object.freeze(user)

user["full name"] = "ravi"
//console.log(user);
user.gretings = function(){console.log("ravi");
}
user.toGretings = function(){console.log(`Hello JS user , ${this.name}`);
}
user.name2="misau miau"
console.log(user.gretings());
console.log(user.toGretings());
console.log(user);


