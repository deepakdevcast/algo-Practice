import * as process from 'process';
/* print pattern: 
A A A A
B B B B
C C C C
D D D D
*/
const nr=4;
const nc=4;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=nc;j++){
        process.stdout.write(String.fromCharCode(`${64+i}`));
    }
    
    process.stdout.write(`\n`);
}