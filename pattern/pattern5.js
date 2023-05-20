import * as process from 'process';
/* print pattern:-
*
**
***
****
*/
const nr = 4;
const nc = 4;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=i;j++){
        // using this to avoid newline
        process.stdout.write('*');
    }
    process.stdout.write('\n');
}