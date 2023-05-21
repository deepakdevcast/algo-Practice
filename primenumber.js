import { createInterface } from 'readline';
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});
let nu;
readline.question('Enter the no. :',number => {
    nu=Number(number);
    readline.close();
    let flag=true;
    for(let i=2;i<nu;i++){
        if(nu%i===0) {
            flag=false
            break;
        }
    }
    if(flag) console.log(nu,' is prime number.')
    else console.log(nu,' is not prime number.')
});