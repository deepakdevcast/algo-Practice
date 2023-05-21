import { readNumberInput } from "./input.js";

const number = await readNumberInput();

const decimalToBinary = (decimalNumber) => {
    let binaryString = '';
    let finalOutput = '';
    while(decimalNumber!=0){
        binaryString+=parseInt(decimalNumber%2);
        decimalNumber=parseInt(decimalNumber/2);
    }
    for(let i=binaryString.length-1;i>=0;i--){
        finalOutput+=binaryString.charAt(i);
    }
    return finalOutput;
}
const binaryString = decimalToBinary(number);
console.log(binaryString)