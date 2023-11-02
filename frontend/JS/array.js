
//Fucntion Type 1
let func = (param1, param2) => {
//body 

};

//Fucntion Type 2
function func(parameter1, parameter2) {
  console.log("Param1 value :", parameter1);
}

function Function1 (){
    console.log("Callback function Called");
}

func(param1, Function1) ;



//Arrow Function with multiple parameters
(param1, param2) => {
  //multiple lines of code in the body
  console.log(param1, param2);
};

//Arrow Function with single parameter
param1=> {
  //multiple lines of code in the body
  console.log(param1);
};

param1 =>console.log(param1);

//Arrow Function
()=>{}


let param1 = 10;

// Function Type 2 with a callback
function func(param1, callback) {
  console.log(param1);
  callback(param1);
}

// Define a callback function
function callbackFunction(value) {
  console.log(`Callback function executed with value: ${value}`);
}

func(param1, callbackFunction); // Call the function with a callback
