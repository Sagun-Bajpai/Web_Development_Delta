let arr=[1,2,3,4,5];
let print=function(el){
    console.log(el);
};
arr.forEach(print);

//similar function
arr.forEach(function(el){
    console.log(el);
});

//arrow fumction
arr.forEach((el)=>{
    console.log(el);
});