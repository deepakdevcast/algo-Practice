import * as process from 'process';
/* print pattern: 
1
22
333
4444
*/
const nr=4;
const nc=4;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(`${i}`);
    }
    process.stdout.write(`\n`);
}