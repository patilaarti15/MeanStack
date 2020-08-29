const mod1 = require("./my_mod/mod1");
const mod2 = require("./my_mod/mod2");

const mod3 = require("./my_mod/mod3");
const mod4 = require("./my_mod/mod4");

// log from module 1
console.log(mod1);

const total = mod1.sum(10, 20);
console.log(total);

// log module 2
console.log(mod2);

// perfrom logic
const sumTotal = mod3.sum(1, 2);
console.log("SUM", sumTotal);

// log modul4
console.log(mod4);