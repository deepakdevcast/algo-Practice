import { readString } from './input.js';

const input = await readString();

const binaryToDecimal = (binaryString) => {
    let number=0;
    for(let i=0;i<binaryString.length;i++){
        number+=parseInt(binaryString.charAt(binaryString.length-i-1))*(2**i)
    }
    return number;
}
// approach 1 using 2**i
console.log('Approach 1 using 2**i to convert')
console.log(binaryToDecimal(input))

// approch 2 using inbuild function
console.log('Approach 2 using parseInt to convert')
console.log(parseInt(input,2))