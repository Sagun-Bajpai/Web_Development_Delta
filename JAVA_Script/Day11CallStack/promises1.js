function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random() * 10)+1;
        if(internetSpeed>4){
            resolve("success: data was saved");
        }
        else{
            reject("failure:weak connection");
        }

    });
}
savetoDB("apna college").then(()=>{
    console.log("promise was resolved");
    return savetoDB("join session");
    })
    .then(()=>{
        console.log("promise1 was resolved");
        return savetoDB("hello sagun");
    })
    .then(()=>{
        console.log("promises3 was saved");
    })
    
.catch(()=>{
    console.log("promise was rejected");
   
});
