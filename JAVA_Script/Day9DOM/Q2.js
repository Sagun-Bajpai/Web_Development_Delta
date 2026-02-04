//Qsl. Create a new input and button element on the page using JavaScript only. Set the  
//text of button to "Click me' 

let button=document.createElement("Button");
let input=document.createElement("Input");
button.innerText="click me!";
document.querySelector("body").append(button);
document.querySelector("body").append(input);


/*Qs2. Add following attributes to the element : 
Change placeholder value of input to "username" 
Change the id of button to "btn' */

button.setAttribute('id','btn');
input.setAttribute('placeholder','Username');

/**Qs3. Access the btn using the querySelector and button id. Change the button background 
color to blue and text color to white. */
button.classList.add("btn");
input.classList.add("user");


/**Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined. 
Change its color to purple. */

let h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";
document.querySelector("body").append(h1);


/**Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice", 
where Delta is bold. */

let para=document.createElement("p");
para.innerText="Apna College Delta Practice";
document.querySelector("body").append(para);

