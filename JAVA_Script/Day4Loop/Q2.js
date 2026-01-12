let num=12345;
let count=num.toString().length;
console.log(count);

let number=234654;
let digit=0;
while(number>0){
    digit++;
    number=Math.floor(number/10);
}
console.log(digit);