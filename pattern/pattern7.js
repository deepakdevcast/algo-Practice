import * as process from 'process';
/* print pattern: 
1
2 3
4 5 6
7 8 9 10
*/
const nr=4;
const nc=4;
let sum = 1;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(`${sum} `);
        sum+=1
    }
    process.stdout.write(`\n`);
}