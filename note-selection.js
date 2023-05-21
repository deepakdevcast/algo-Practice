import { readNumberInput } from "./input.js";

// finding how many multiple no. of notes of 100,50,20,1 needed for given amount
let n = await readNumberInput();

const expression = (n)=>{
    if(n/100!==0) return 100;
    else if(n/50!==0) return 50;
    else if(n/20!==0) return 20;
    else return 1;
}

switch(expression(n)){
    case 100: console.log(`no. of 100 notes: ${parseInt(n/100)}`);
            n=n%100;
    case 50: console.log(`no. of 50 notes: ${parseInt(n/50)}`);
            n=n%50;
    case 20: console.log(`no. of 20 notes: ${parseInt(n/20)}`);
            n=n%20;
    case 1: console.log(`no. of 1 notes: ${parseInt(n)}`);
            break;
}