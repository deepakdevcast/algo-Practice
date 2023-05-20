import * as process from 'process';
/* print pattern: 
A B C D
E F G H
I J K L
M N O P
*/
const nr=4;
const nc=4;
let sum=1;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=nc;j++){
        process.stdout.write(String.fromCharCode(`${64+sum}`));
        sum+=1;
    }
    
    process.stdout.write(`\n`);
}