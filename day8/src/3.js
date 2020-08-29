  

let hello = async () => {
    console.log("HELLO CDAC JUHU");
  
    return "HELLOOOO";
  };
  
  let mpromise = hello();
  
 
  mpromise.then((data) => {
    console.log(data);
  });
  
  mpromise.catch((err) => {
    console.log(err);
  });