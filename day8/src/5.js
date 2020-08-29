let fs = require("fs");

let Promise = require("bluebird");
Promise.promisifyAll(fs);

const filePath = "\Users\Aarti\Desktop\New folder\main\day8\src\main.js";
fs.readFileAsync(filePath, { encoding: "utf-8" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });