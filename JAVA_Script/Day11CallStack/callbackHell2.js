function savetoDB(data,success,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        success();
    }
    else{
        failure();
    }
};
savetoDB("Apna collage",()=>{
    console.log("success1:data was saved");
    savetoDB("Join in Class",()=>{
        console.log("success2:data was saved");
        savetoDB("Sagun Join",()=>{
            console.log("success3:data was saved");
        },()=>{
            console.log("failure3:weak connection");
        });
    },()=>{
        console.log("failure2:weak connection");
    });
},()=>{
    console.log("failure1:weak connection");
});
//ye nested form me callback hell start ho gya promises se
//jb first data saved hoga then second save hone jayega ,agr second save hoga tb third hone jayega agr kishi bhi dtata me weak connection aaya toh stop krr jayega.
//that is call back hell
//esme maine asynchronous situation create kiya hai humne

