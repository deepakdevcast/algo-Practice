import * as process from 'process';
/* print pattern: 
   1
  121
 12321
1234321
*/
const n=5;
for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write(`${j}`);
    }
    for(let j=i-1;j>=1;j--){
        process.stdout.write('*');
    }
    for(let j=1;j<=i-1;j++){
        process.stdout.write('*');
    }
    for(let j=n-i+1;j>=1;j--){
        process.stdout.write(`${j}`);
    }
    // for(let j=i-1;j>=1;j--){
    //     process.stdout.write(`${j}`);
    // }
    process.stdout.write(`\n`);
}