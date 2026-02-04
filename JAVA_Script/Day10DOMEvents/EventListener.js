let btns=document.querySelectorAll("button");
for(let btn of btns){
    //multiple work ko ek event se handle krna.
    btn.addEventListener("click",sayHello);
     btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("you are double click btn");

    });
}
//you can crete multiple function 
function sayHello(){
    console.log("hello guyzz .")
};

function sayName(){
    console.log("I am sagun.")
};
