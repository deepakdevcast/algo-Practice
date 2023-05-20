import * as process from 'process';

/* print pattern:-
1234
1234
1234
1234
*/
const nr = 4;
const nc = 4;
for(let i=1;i<=nr;i++){
    for(let j=1;j<=nc;j++){
        // using this to avoid newline
        process.stdout.write(`${j}`);
    }
    process.stdout.write('\n');
}

console.log("2nd pattern in decreasing order:");
/* print pattern:-
4321
4321
4321
4321
*/
for(let i=1;i<=nr;i++){
    for(let j=1;j<=nc;j++){
        // using this to avoid newline
        process.stdout.write(`${nc-j+1}`);
    }
    process.stdout.write('\n');
}