import * as process from 'process';
/* print pattern: 
   1
  22
 333
4444
*/
const n=4;
const nr=n;
for(let i=1;i<=nr;i++){
    let nspace = n-i;
    for(let j=1;j<=nspace;j++){
        process.stdout.write(' ');
    }
    for(let j=1;j<=n-nspace;j++){
        process.stdout.write(`${i}`);
    }
    process.stdout.write(`\n`);
}