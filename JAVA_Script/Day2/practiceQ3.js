let str="apple";
if(str[0]==="a" && str.length>3){
    console.log("good string");
}else{
    console.log("not a good string");
}
// using of TRUTHY & FALSY Value
let string="";
if(string){//if me false value hoti hi
    console.log("string is not empty");
}
else{//else me true value hoti hi
    console.log("string is empty");
}

let num=10;
if(num){
    console.log("num is not equal to 0");
}
else{
    console.log("num is equal to 0");
}
 


// switch statement
let color="red";
switch(color){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("light is broken");
}
console.log("after switch stt")