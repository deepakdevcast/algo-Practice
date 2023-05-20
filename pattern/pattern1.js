import * as process from 'process';

/* print pattern:-
****
****
****
****
*/
const character = '*';
const nr = 4;
const nc = 4;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=nc;j++){
        // using this to avoid newline
        process.stdout.write(character);
    }
    process.stdout.write('\n');
}