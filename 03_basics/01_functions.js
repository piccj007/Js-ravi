console.log("Functions");
// function sayMyName() {
//     console.log("R");
//     console.log("a");
//     console.log("v");
//     console.log("i");                                           
    
// }

// sayMyName()
function add(a,b) {
    console.log("miau:  " + a+b);
return a+b     
}
const a = add(1,1)
//console.log(a)
function print(string = "Value is not enterd") {
    if(!string)
    {
        console.log(`Please enter value in print()`);
        return
    }

    console.log(`${string}`);   
  
}
const a1= 10,a2 = 5
print(a1)
print()