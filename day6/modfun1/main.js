const PI = require("./my_mod/mod1");
const mod2 = require("./my_mod/mod2");
const mod3 = require("./my_mod/mod3");
const mod4 = require("./my_mod/mod4");

// values from mod1
console.log(PI);
console.log("I am main function");

// values from mod2
console.log(mod2);
console.log(mod2.MY_APP_NAME);
console.log(mod2.MY_AREA);

// log the value from mod3
console.log(mod3);

// log the value from mod4
console.log(mod4);