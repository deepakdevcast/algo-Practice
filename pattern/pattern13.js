import * as process from 'process';
/* print pattern: 
ABCD
BCDE
CDEF
DEFG
*/
const nr=4;
const nc=4;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=nc;j++){
        process.stdout.write(String.fromCharCode(`${64+i+j-1}`));
    }
    
    process.stdout.write(`\n`);
}