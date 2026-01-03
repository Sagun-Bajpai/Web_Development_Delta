 //linking JS file 
 console.log("hello guyzz");
 console.log("apna collage");
let a=16;
let b=10;
console.log("sum is:" ,a+b);

// this is a tramplate literals
let pencilprice=5;
let penprice=10;
let output=`The total price is: ${pencilprice + penprice} Rupees`;
console.log(output);

//Arithmetic Operators
let p=12;
let q=10;
console.log(p + q);
console.log(p - q);
console.log(p * q);
console.log(p / q);
console.log(p %q );

//Unari Operators
let r=3;
console.log(r++);//post increment
console.log(++r);//pre increminant
console.log(r--);//post dicrement
console.log(--r);//pre decrement 
//Assingment Operator
let s=2;
let t=4;
t=s;
console.log(t);//print the value of 2

//comparison operators
let u=5;
let v=6;
u>v; 

//conditional satement
//using is statememnt
let firstname="sagun";
if(firstname=="sagun"){
    console.log(`welcome ${firstname}`);
}

//logical operator
let marks=90;
if(marks>=33 && marks>=80){
    console.log("pass");
    console.log("A+");
}