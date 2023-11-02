
 //using array map method

 //let array = [2,4,6]

 let trainers = [
    "Kazim",
    "Ali",
    "Muzu",
   ]
  
    mappedtrainers = trainers.map ((train)=>train.toLowerCase());
   console.log(mappedtrainers);
  
   let number = [2,4,6,8];
   mappednumber = number.map(function(Value,Index,Array){
    
      console.log(Value,Index,Array);
      return Value*2
     
   });

//Using Array methods

let traineesArray = [
"aliya",
"malika",
"mehmooda",
"mudeera",
"shahina",
"fatima",
"qamar",
"akbar",
"zakir",
"shehbaz",
"javed",
"tehzeeb",
];

//push method
traineesArray.push("Farkhanda");
console.log("\apply push array method");
console.log(traineesArray);


//unshift method
traineesArray.unshift("Farzana");
console.log("\apply unshift array method" );
console.log(traineesArray);

//pop method
traineesArray.pop();
console.log("/apply pop array method");
console.log(traineesArray);

//shift method
traineesArray.shift();
console.log("\apply shift array method");
console.log(traineesArray);


//is array method
let isArray = Array.isArray(traineesArray);
console.log("\apply is array method");
console.log(isArray);

//Apply lenght method
let abc = traineesArray.length;
console.log("\apply lenght array method");
console.log(abc);

//Apply charAt
let charAtTraineeString = traineeString.charAt(10); // Get the character at a specific index of the string
console.log("\n Apply CharAt ");
console.log(charAtTraineeString);

//filter araay method
let filteredTraineesArray = traineesArray.filter(
(trainee) => trainee.charAt(0) === "m"
); // Filter elements based on a condition
console.log("\n Apply Filter");
console.log(filteredTraineesArray);

//single parameter with single line of body 
a=>console.log(a);

//single parameter with multiple lines of body 

a=>{
  console.log(a)
  console.log(a)
}

//multiple parameters with single line of body 

(a , b)=>console.log(a ,b);

//multiple parameters with multiple lines of body 
(c , d)=>{
  console.log(c ,d)
  console.log(c ,d)

}

let mappedTraineesArray = trainees.map( params=>params.toUpperCase()); 
console.log("\n Apply Map  ");
console.log(mappedTraineesArray);

console.log("\n Apply Switch  ");
switch (
  traineesArray[0] // Use a switch statement
) {
  case "aliya":''
    console.log("First trainee is Aliya");
    break;
  case "malika":
    console.log("First trainee is Malika");
    break;
  default:
    console.log("First trainee is not Aliya or Malika");
    break;
}

//Map example
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

//map-fuction
const array = [2,4,6,8];
array.map(function(value){
  conmsole.log(value+1)
})

//for each method
let sum = 0;
const num= [65, 44, 12, 4];
num.forEach(myFunction);

function myFunction(item) {
  sum += item;
}