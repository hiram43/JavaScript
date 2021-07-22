let BoolFlag = true;


//This is the main structure of a JS promise
let PromFiveSec = new Promise ((resolve,reject)=>{
    setTimeout(function(){
       if(BoolFlag){ resolve("Exito")}else{
           reject("Falso")
       }
    },5000);
})
let PromTeenSec = new Promise ((resolve,reject)=>{
    setTimeout(function(){
       if(BoolFlag){ resolve("Exito")}else{
           reject("Falso")
       }
    },10000);
})
let PromFifhtySec = new Promise ((resolve,reject)=>{
    setTimeout(function(){
       if(BoolFlag){ resolve("Exito")}else{
           reject("Falso")
       }
    },15000);
})


//We call the Promise  
PromFiveSec.then((SuccesMessage)=>{
    console.log("Bien"+SuccesMessage)
}).catch((ErroeMsg)=>{
    console.log("No puedo acceder" + ErroeMsg)
})

//we can call all the promises at the same time

Promise.all([PromFiveSec,PromTeenSec,PromFifhtySec]).then(values =>{
    console.log(values)
}).catch(reason =>{
    console.log(reason)
});
