const data = {
  username: "saqlain",
  age: 70,
  number: 432423,
  isMale: true,
};
const { username, age, number, isMale } = data;
console.log("My Name is ", username);


//Example2
const user = {
  name: "Syed Kazim",
  batch: 5,
  id:123,
  num:4567,
};
const {name,batch,id,num} = user;
console.log("my number is", number);

//Example3

let message = {
  nam:"Mr.Kazim",
  msg:"Good morning",
  to:"too",
  time:"its 10pm",
  msg2:"good nite",
  msg3:"good evening",
  name2:"Mr.Ali",
}

let {nam,msg,to,time,msg2,msg3,name2} = message;
console.log("mesg",msg,to,nam,time);