const name1 = "Ravi"
const name2 = "Suthar"
// console.log(`Hello my name is ${name1} ${name2}`);
const n = new String('Ravi V Suthar')
console.log(n[1]);
console.log(n.__proto__);
console.log(n.length);
console.log(n.charAt(2));
console.log(n.indexOf('v'));
const n1 = n.substring(0,2)
console.log(n1);

const n2 = n.slice(-12,5)
console.log(n2);

const n3 = "      ravi   v suthar   as   devloper      "
console.log(n3);
console.log(n3.trim());
const n4 = "https://ravi.com/ravi suthar"
console.log(n4.replace(' ','-') || n4.includes('ravi  '))
console.log(n4.split('/') + " " + n4.blink());
