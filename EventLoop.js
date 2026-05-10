// EventLoop(Deep Understanding)

console.log("Start");
setTimeout(()=>{
    console.log("Timeout");
    
},0);

Promise.resolve().then(()=>{
    console.log("promise");
    
})

console.log("End");

