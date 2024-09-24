const add = (a,b)=>(a+b)
console.log(add(1,1));
const a = () => ({})
console.log(a());
(()=>{
    console.log("ravi")
    console.log("miau")        
})();
((a)=>{
    console.log("ravi")
    console.log("miau")   
    console.log(`${a}`)        
})("Butter Biau");
function one(){
    console.log("1");
    function two(){
        console.log("2");
        function three(){
            console.log("3");
        }
            three()
        } 
            two()
        }
            one()
