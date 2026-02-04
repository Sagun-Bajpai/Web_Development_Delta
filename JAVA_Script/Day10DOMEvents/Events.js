let btns=document.querySelectorAll("button");//all btns access
console.dir(btns);// priint property of events 
for(let btn of btns){
    btn.onclick=function(){
        console.log("button was clicked");
   // alert("button was clicked");
};
//curser ko btn ke area me touch karane pr print hoga
btn.onmouseenter=function(){
    console.log("hey sagun! you entered button");

};
}

