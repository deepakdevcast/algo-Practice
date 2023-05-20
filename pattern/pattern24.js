import * as process from 'process';
/* print pattern: 
   1
  23
 456
78910
*/
const n=4;
let sum=1;
for(let i=1;i<=n;i++){
    let nspace = n-i;
    for(let j=1;j<=nspace;j++){
        process.stdout.write(' ');
    }
    for(let j=1;j<=i;j++){
        process.stdout.write(`${sum}`);
        sum+=1;
    }
    process.stdout.write(`\n`);
}