import * as process from 'process';
/* print pattern: 
****
 ***
  **
   *
*/
const n=4;
const nr=n;
for(let i=1;i<=nr;i++){
    let nspace = i-1;
    for(let j=1;j<=nspace;j++){
        process.stdout.write(' ');
    }
    for(let j=1;j<=n-nspace;j++){
        process.stdout.write('*');
    }
    process.stdout.write(`\n`);
}