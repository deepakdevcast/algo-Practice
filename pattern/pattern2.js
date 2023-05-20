import * as process from 'process';

/* print pattern:-
1111
2222
3333
4444
*/
const nr = 4;
const nc = 4;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=nc;j++){
        // using this to avoid newline
        process.stdout.write(`${i}`);
    }
    process.stdout.write('\n');
}