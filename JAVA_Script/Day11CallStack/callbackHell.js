H1=document.querySelector("H1");
function changeColor(color,delay,nextColorChange){
    setTimeout(()=>{
        H1.style.color=color;
        if(nextColorChange) nextColorChange();
    },delay);
}

changeColor("red",1000,() =>{
    changeColor("pink",1000,()=>{
        changeColor("yellow",1000,()=>{
             changeColor("blue",1000,()=>{
                 changeColor("purple",1000);
             });
        });
    });
});

//callbacks nesting -> callbacks hell