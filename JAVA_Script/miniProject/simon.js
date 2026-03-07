let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let h2=document.querySelector("h2");

document.addEventListener("keydown", function(){
    if(started == false){
        console.log("game is started");
        started = true;
    }
    levelup();
});

function levelup(){
    level++;
    h2.innerText=`level ${level}`;

}