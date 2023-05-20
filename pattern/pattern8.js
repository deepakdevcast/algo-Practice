import * as process from 'process';
/* print pattern: 
1
2 3
3 4 5
4 5 6 7
*/
const nr=4;
const nc=4;
console.log("approach 1 with extra sum variable-")
for(let i=1;i<=nr;i++){
    let sum = i;
    for(let j=1;j<=i;j++){
        process.stdout.write(`${sum} `);
        sum+=1;
    }
    process.stdout.write(`\n`);
}

console.log("approach 2 without extra sum variable-");
for(let i=1;i<=nr;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(`${i+j-1} `);
    }
    process.stdout.write(`\n`);
}
