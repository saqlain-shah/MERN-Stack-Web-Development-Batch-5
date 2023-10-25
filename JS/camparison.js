let x = 5;
let y = 5;

// == Operator
if (x === y) {
  console.log("x is equal to y");
} else {
  console.log("x is not equal to y");
}

// === Operator
let a = 5;
let b = "5";
if (a == b) {
  console.log("a is equal to b in both value and type");
} else {
  console.log("a is not equal to b in both value and type");
}

// != Operator
let p = 10;
let q = 15;
if (p != q) {
  console.log("p is not equal to q");
} else {
  console.log("p is equal to q");
}

// !== Operator
let m = 10;
let n = "10";
if (m !== n) {
  console.log("m is not equal to n in either value or type");
} else {
  console.log("m is equal to n in either value or type");
}

// > Operator
let age = 25;
if (age > 18) {
  console.log("You are older than 18 years old");
} else {
  console.log("You are not older than 18 years old");
}

// < Operator
let score = 85;
if (score < 90) {
  console.log("Your score is less than 90");
} else {
  console.log("Your score is at least 90");
}

// >= Operator
let price = 20;
if (price >= 15) {
  console.log("The price is $15 or greater");
} else {
  console.log("The price is less than $15");
}

// <= Operator
let quantity = 5;
if (quantity <= 10) {
  console.log("You have 10 or fewer items");
} else {
  console.log("You have more than 10 items");
}

// ? Operator
let isRaining = true;
let weatherMessage = isRaining
  ? "Bring an umbrella"
  : "No need for an umbrella";
console.log(weatherMessage);
