const id=setInterval(()=>{
    console.log("Hello world!");
},2000);

//stop karenge clearInterval(id) se using setTimeout  10000milisec
setTimeout(()=>{
    clearInterval(id);
    console.log("clear Interval run")
},10000);