import * as process from 'process';
/* print pattern: 
A
BB
CCC
DDDD
*/
const nr=4;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(String.fromCharCode(`${64+i}`));
    }
    
    process.stdout.write(`\n`);
}