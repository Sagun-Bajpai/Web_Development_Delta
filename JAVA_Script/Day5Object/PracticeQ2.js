const cars=[{
    name:"BMW",
    model:"X5",
    color:"black"
},
{
    name:"Audi",
    model:"A6",
    color:"white"
},
{
    name:"Tesla",
    model:"model S",
    color:"Red",
},
{
    name:"mercedes",
    model:"C class",
    color:"Blue",
}
];
let randomIndex=Math.floor(Math.random()*cars.length);
console.log("print random car Name:")
console.log(cars[randomIndex].name);

