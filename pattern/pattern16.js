import * as process from 'process';
/* print pattern: 
A
BC
CDE
DEFG
*/
const n=4;
const nr=n;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(`${64+i+j-1}`));
    }
    
    process.stdout.write(`\n`);
}