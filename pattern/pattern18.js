import * as process from 'process';
/* print pattern: 
   *
  **
 ***
****
*/
const n=4;
const nr=n;
const nc=n;
console.log('approach 1 with if-else condition.')
for(let i=1;i<=nr;i++){
    let nspace = n-i;
    for(let j=1;j<=nc;j++){
        if(j<=nspace){
            process.stdout.write(' ');
        }else{
            process.stdout.write('*');
        }
    }
    
    process.stdout.write(`\n`);
}
console.log('approach 1 with for loop for both space and *.')
for(let i=1;i<=nr;i++){
    let nspace = n-i;
    for(let j=1;j<=nspace;j++){
        process.stdout.write(' ');
    }
    for(let j=1;j<=i;j++){
        process.stdout.write('*');
    }
    process.stdout.write(`\n`);
}