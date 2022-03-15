for(let i = 0; i<100; i++) {

       const number = i+1; 
       if(number %3 === 0  && number %5 === 0) {
              console.log(" fizzBuzz ");
       } else if (number %3 ===0) {
              console.log(" fizz");
       }else if (number %5 ===0) {
              console.log("Buzz");
       }else   {
              console.log(`${number}`);
       }

}
