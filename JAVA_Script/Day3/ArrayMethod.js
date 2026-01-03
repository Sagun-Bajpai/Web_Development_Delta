let cars=['audi','BMW','Maruti','BUS'];
cars.push('toyota');//add cars in last index using push() method
cars.push("farari");
console.log(cars);
cars.pop();//delete cars in last indexes using pop() method
cars.pop();
console.log(cars);
cars.unshift("toyota");//add cars starting index using unshift() method
cars.unshift("XUV");
console.log(cars);
cars.shift("Thar");//delete cars starting index using shift() method
cars.shift("XUV");
console.log(cars);


//slicing 
let num=['1','2','3','4'];
console.log(num.slice());
console.log(num.slice(-1));//negative indexing 
console.log(num.slice(1,3));
//splice     [start, deleteCount, item()...item(N)]
let colors=["red","yellow","blue","orange","pink","white"];
console.log(colors.splice(4));//delete last 5 and 6 index
console.log(colors);// remaing element of array
console.log(colors.splice(0,1));//delete 1st element
colors.push("purple");
console.log(colors);
console.log(colors.splice(0,0 ,"skyblue","babypink"));//jo starting index daloge usme hi store hogi value

console.log(colors);
console.log(colors.splice(1,1,"ranipink"));
console.log(colors);
//sorted array
let days=["monday","tuesday","wednesday","thursday","friday","saturrday","sunday"];
days.sort();//alphabetic wise sorting
console.log(days);
let squares=[25,16,4,49,36,9];
squares.sort();
console.log(squares);//randomlyvvalue aati hi sorted me

//constent array
const arr=[1,2,3];
console.log(arr);
console.log(arr.push(4));

