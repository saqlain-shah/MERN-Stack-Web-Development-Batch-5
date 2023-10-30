//array of trainees name
let trainees = [
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

console.log(trainees)

 // Using String methods
// Using String methods
//.join()
let traineeString = trainees.join(", "); // Convert array to a string separated by commas
console.log("\n Apply join  ");
console.log(traineeString);

//slice method
let sliceTraineestring = traineeString.slice(1,30);
console.log("\apply slice method")
console.log(sliceTraineestring);

 //substring
 let substringTraineeString = traineeString.substring(0 , 10); // Get a substring of the string
 console.log("\n Apply substring");
 console.log(substringTraineeString);

//replace
let replaceTraineeString = traineeString.replace("aliya", "kazim");
console.log("\apply replace");
console.log(replaceTraineeString);

//uppercasemethod
let UpperCaseTraineeString = traineeString.toUpperCase();
console.log("\applyuppercase");
console.log(UpperCaseTraineeString);

//LOWERCASE
let lowerCaseTraineeString = traineeString.toLocaleLowerCase();
console.log("\apply lower case");
console.log(lowerCaseTraineeString);

//apply concenate
let concenateTraineeString = traineeString.concat(" are trainees.");
console.log("\apply concat");
console.log(concenateTraineeString);

//applytrim
let trimTraineeString = traineeString.trim();
console.log("\apply trim");
console.log(trimTraineeString);

//apply trim start
let trimstartTraineeString = traineeString.trimStart();
console.log("\apply trimstart");
console.log(trimstartTraineeString);

//apply padstart
let paddedTraineeString = traineeString.padStart(traineeString.length+10,"-"); // Pad the string with a specified character from the beginning
console.log("\n Aplly Pad Start  ");
console.log(paddedTraineeString);

//apply padEnd
let padEndTraineeString = traineeString.padEnd(traineeString.length + 7, "_");
console.log("\applypadEnd");
console.log(padEndTraineeString);


//apply Charcode
let charCodeAtTraineeString = traineeString.charCodeAt(1); // Get the ASCII value of the character at a specific index of the string
console.log("\n Apply charCodeAt");
console.log(charCodeAtTraineeString);

//apply split
let splitTraineeString = traineeString.split(","); // Split the string into an array based on a specified separator
console.log("\n Apply Split  ");
console.log(splitTraineeString);

// Using Array methods

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

//single parameter with with line of body 
a=>console.log(a);

//single parameter with with multiple lines of body 

a=>{
  console.log(a)
  console.log(a)
}

//multiple parameters with with  line of body 

(a , b)=>console.log(a ,b);

//multiple parameters with with  multiple lines of body 
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
  case "aliya":
    console.log("First trainee is Aliya");
    break;
  case "malika":
    console.log("First trainee is Malika");
    break;
  default:
    console.log("First trainee is not Aliya or Malika");
    break;
}



  