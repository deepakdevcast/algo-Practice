import * as process from 'process';
/* print pattern: 
****
***
**
*
*/
const n=4;
const nr=n;
const nc=n;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=nc-i+1;j++){
        process.stdout.write('*');
    }
    process.stdout.write(`\n`);
}