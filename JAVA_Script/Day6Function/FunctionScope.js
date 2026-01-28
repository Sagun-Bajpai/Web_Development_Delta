let age=43;//global scope
function calSum(a,b){
    let sum=a+b;//function scope
    console.log(sum);
}
calSum(3,6);
console.log(age);