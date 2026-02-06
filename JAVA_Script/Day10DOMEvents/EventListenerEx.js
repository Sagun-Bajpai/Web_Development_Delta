let btn=document.querySelector("button");
btn.addEventListener("dblclick",function(event){//event/e is a bydefault argument
    console.log(event);
    console.log("double clicked your button");
});


let p=document.querySelector("p");
p.addEventListener("click",function(event){//event is a bydefault argument
    console.log(event);
    console.log("clicked your paragraph");
});

let box=document.querySelector(".box");
box.addEventListener("mouseenter",function(e){
    console.log(e);
    console.log("your curser touch in div box.");
});