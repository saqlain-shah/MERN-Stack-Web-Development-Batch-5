     
 let student = {
     Name: "",
     Class:"",
     Batch:"",
     id:"",}


let student1 ={ ...student};
let student2 ={...student};
let student3 ={...student};

const STUDENTS = [student, student1, student2, student3];
STUDENTS[1].Name ="Alee"
STUDENTS[0].Class = 10
STUDENTS[0].Batch = 1
STUDENTS[0].id = 12

STUDENTS[1].Name ="Hamza"
STUDENTS[1].Class = 12
STUDENTS[1].Batch = 14
STUDENTS[1].id = 1234

STUDENTS[2].Name ="Abid"
STUDENTS[2].Class = 5
STUDENTS[2].Batch = 12
STUDENTS[2].id = 1267

//console.log(STUDENTS)
let a = 3;
let x = (100 + 50) * a;
console.log("Value of x by multiply with a:",x)

//Code Example of addition

//code example of addition
let addition = 10 + 5;
console.log("addition:",addition);

//code example of pre-increment
let add = 100 + 50;
console.log("add:", add);

//addition assignment operator
let number1=10;
number1 +=3;
console.log("Applied pre Inrement operator:",number1);
//substraction assignment operator
let number2=5;
console.log("Applied pre Increment operator:",++number2);
console.log("Applied pos Increment operator:",number2++);
console.log("Applied pre decrement operator:",--number2);
console.log("Applied pos decrement operator:",number2--);

//pre increment
console.log("Pre-increment:",++number2);
console.log("Pre-increment:",++number2);
console.log("Pre-increment:",++number2);
//Exponentiation
number3=3;
number3*=3;
console.log("exponentiation:",number3);
//pre-increment
num1=4
//num1 %=4

//console.log("multiplication:",num1);
num2=4;
console.log("multiplication:",num2%=6);
//new
num=5;
num8=2;
//console.log("substraction:",num8%num);
num *=6;
//console.log("multiply:",num);
//num8=2;
//num8====2;
//console.log("equal to:",num8);
let text1 = "20";
let text2 = "5";
let result = text1 > text2;
console.log("less than:",result);

let text=5;
let texta=6;
let results= text >= texta;
console.log("result:",results);
//&&-Operator
let leftside  = false;
let rightside = true;
if (!(leftside && rightside)) {
    console.log("True Statement");
} else{ console.log("False Statement");

}


// == Operator
let age = 24;
let hisage = 16;
if (age === hisage){
    console.log("True Statement");
   }else{
    console.log("False Statement");
   }

////
function Addition(num1, num2) {
    let sum = num1 + num2;
     return sum;
    }
    const Addition = (num1, num2) => {
      let sum = num1 + num2;
      return sum;
    };
    
    console.log("Result :", Addition(10, 20));
    console.log("Result :", Addition(30, 40));
    console.log("Result :", Addition(50, 60));
    console.log("Result :", Addition(70, 80));
    
    let Add1 = (num1, num2) => {
      let sum = num1 + num2;
      return sum;
    };
    
    
    //Option 2
    function Add2(parameters) {
    
    
    }
    
    //Option 3
    const Add3 = parameters => {
    
        
    };


 
    
   





