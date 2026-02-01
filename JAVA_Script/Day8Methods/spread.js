//using array literal
let arr=[1,2,3,4,5,4,3,2,2];
console.log(...arr);  // indivisual element ko print kara rha hai

let char="rajiyaBano";
console.log(...char);

let name="sagun";
let nickname="krisa";
console.log(...name,...nickname);//mearging ka kaam krr rha hai
//using object literal
let data={
    name:"moto",
    age:21,
    marks:95
};
let dataCopy={...data,gender:"female"};