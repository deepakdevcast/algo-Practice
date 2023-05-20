import * as process from 'process';
/* print pattern: 
A
BC
DEF
GHIJ
*/
const n=4;
const nr=n;
let sum=1;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(`${64+sum}`));
        sum+=1;
    }
    
    process.stdout.write(`\n`);
}