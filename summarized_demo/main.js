let mymod1 = require("./my.mod1");
let mymod2 = require("./my.mod2");
const PI=mymod1.pi;
console.log("Hello CDAC...!!!",PI);

const res1=mymod2.sum(5, 5);
const res2=mymod2.diff(5, 1);
console.log(res1);
console.log(res2);

