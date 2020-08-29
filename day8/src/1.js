
let abc= async () => {
    for (let i = 0; i < 10; i++) {
      console.log("I am function 1!!");
    }
    console.log("THE END!!");
  };
  
 
  let pqr = async () => {
    for (let i = 0; i < 10; i++) {
      console.log("I am function 2!!");
    }
  };
  
  abc();
  pqr();