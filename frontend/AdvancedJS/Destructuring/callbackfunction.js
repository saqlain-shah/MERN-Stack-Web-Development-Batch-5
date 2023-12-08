//Without perameter function

function show(){
  console.log("Iam show function");
}
function geeky(callback){
callback();
}
geeky(show);



//With perameter
function show1(a){
  console.log("Iam show function" + a);
}
function geeky1(callback){
  var a = 101
callback(a);
}
geeky1(show1);

//It can also be wirtten as it
function show2(a){
  console.log("Iam show function" + a);
}
function geeky2(a,callback){
callback(a);
}
geeky2(101,show2);

//try example1
function kaz(k){
  console.log("I.A we can do it" + k)

}
function zim(callback){
 var k = 100;
  callback(k)
}
zim(kaz);


//try example 2
function muz(z){
  console.log("I.A will get good grades" + z)
}
function amil(callback){
 var z = 100;
  callback(z)
}
amil(muz);

//try example3
function di (a){
  console.log("I.A also get good grades" + a)
}
function ya (callback){
  a = 100;
  callback(a)
}
ya(di);

//call back arrow function
function diya (callback){
 var  d = 100;
  callback(d)}
  diya(d=>console.log("I.A will gets full marks"+d));
  
  //example 2
  function muzammil(callback){
   let m = 100;
    callback(m)
  }
  muzammil(m=>console.log("I.A will also get full grades" +m))

  //Synchronous function:

  function show (){
    console.log("Iam function")
  }
  function geeky (callback){
    callback();
  }
  geeky(show);
  console.log("End");

