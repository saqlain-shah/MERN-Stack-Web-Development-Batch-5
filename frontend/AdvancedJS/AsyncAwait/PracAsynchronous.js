            
             //Basic Structure of Asynchronous setTimeout method:
//setTimeout(()=>{
    //console.log("")
//},1000/set any time
//);



//Asynchronous method
setTimeout(
    function show (){
      console.log("Iam function")
    }, 5000);
    console.log("End");

    //Example 2
     console.log("Start")
     setTimeout(()=>{
        console.log("SetTimeout")
     },5000
     );
     console.log("End");

     //Example of Asynchronous method in which we face a problem(geeky shows):
     //console.log("Start")

     //function getName(name){
       // setTimeout(()=>{
           // console.log("Inside setTimeout function")
           // return(name);(
        //},2000)
    //}
    //const nm=getName('sonam');
    //console.log(nm)

   // console.log("End");

    //Solution of above ans by using callback function (Geeky shows):

    function getName(name,callback){
        setTimeout(() => {
            callback(name)
        },2000)  
        }
        const nm1 = getName ('Muhammad', (nm1)=>{console.log(nm1)})
        
        console.log("End");
        //Promise method  
        //Basic syntax
        const promiseobj = new Promise (()=>{

        }) //we can write anything on the place of promiseobj (line 52):
        
        //Promise Method
        console.log("before Promise");
        
        function getName(name){
            return new Promise((resolve,reject)=>{
                setTimeout(() => {
                    console.log(name)
                    resolve(name)

                },2000)

            })
            }
        
            console.log("After Promise");

            
            //setTimeout function doing by callbackfunction:2
            
            console.log("before callback")

            function gotName(mintakh,callback){
                setTimeout(()=>{
                    callback(mintakh)
                },2000)
            }
            const nam =gotName ("Aliwali",(nam)=>{console.log(nam)});

            console.log("after callback");

            //setTimeout Function by Promise method

            console.log("before Promise");

            function gotName(mintakh){
                return new Promise((resolve,reject)=>{
                 setTimeout(()=>{
                    console.log(mintakh)
                    resolve(mintakh)
                 })
                },4000)
            }
           console.log("After Promise")
          
