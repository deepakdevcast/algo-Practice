import { readString } from "../input.js";

const checkPalindrome = (str) =>{
    let start = 0;
    let end = str.length-1;
    while(start<end){
        if(str[start]!==str[end]) return false;
        start+=1
        end-=1
    }
    return true;
}

const run = async () =>{
    let str = await readString("Enter string: ");
    if(checkPalindrome(str)) console.log('String is palindrome.');
    else console.log('String is not palindrome.');
}

await run();