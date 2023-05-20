import * as process from 'process';
/* print pattern: 
A B C D
A B C D
A B C D
A B C D
*/
const nr=4;
const nc=4;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=nc;j++){
        process.stdout.write(String.fromCharCode(`${64+j}`));
    }
    
    process.stdout.write(`\n`);
}