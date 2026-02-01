let num=[1,2,3,4];
let double=num.map((el)=>{
    console.log(el*el);
    return el*el;
});


//filter function
let nums=[1,2,3,4,2,3,4,5,6,78,2,3,22,4,44];
let even=nums.filter((el)=>{
    return el%2==0;

});

//every function
let arr=[2,3,4,5,6,7];
let ans=arr.every((el)=>{
    return el%2==0;
});
console.log("ans is: "+ans);

//reduce function
let Val=[1,2,3,4];
let finalVal=Val.reduce((res,el)=>{
   return  res+el;  
});
 console.log("total value is: "+finalVal);