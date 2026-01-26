const max=prompt("enter random number:");
const random=Math.floor(Math.random() * max)+1;
let guess=prompt("Guess any num :");
while(true){
    if(guess=="quit"){
        console.log("User quit!");
         break;

    }

    if(random==guess){
        console.log("You are right,Congrats!,random number was",random);
        break;
    }
    else if(guess<random){
         guess=prompt("Your Guess was too small,Please Try again!");

    }
    else{
       guess=prompt("Your Guess was too large,Please Try again!");
    
    }
    
}

