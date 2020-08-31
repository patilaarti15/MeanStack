const fs = require("fs");

const Promise = require("bluebird");
Promise.promisifyAll(fs);

let readDemo = async () => {
  console.log("Hello Async Await");

  const filePath1 = "Users\Aarti\Desktop\New folder\main\fs_promise\src\temp.txt";
  const data1 = await fs.readFileAsync(filePath1, { encoding: "utf-8" });
  console.log(data1);

  const filePath2 = "Users\Aarti\Desktop\New folder\main\fs_promise\src\temp1.txt";
  const data2 = await fs.readFileAsync(filePath2, { encoding: "utf-8" });
  console.log(data2);

  const filePath3 = "Users\Aarti\Desktop\New folder\main\fs_promise\src\temp2.txt";
  const data3 = await fs.readFileAsync(filePath3, { encoding: "utf-8" });
  console.log(data3);
};

readDemo();