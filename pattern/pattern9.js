import * as process from 'process';
/* print pattern: 
1
2 1
3 2 1
4 3 2 1
*/
const nr=4;
const nc=4;
console.log("approach 1 with extra sum variable-")
for(let i=1;i<=nr;i++){
    let sum = i;
    for(let j=1;j<=i;j++){
        process.stdout.write(`${sum} `);
        sum-=1;
    }
    process.stdout.write(`\n`);
}

console.log("approach 2 without extra sum variable-");
for(let i=1;i<=nr;i++){
    for(let j=i;j>=1;j--){
        process.stdout.write(`${j} `);
    }
    process.stdout.write(`\n`);
}