let a=0
let b=1;
let n=10;
process.stdout.write(`${a} ${b} `);
for(let i=2;i<n;i++){
    process.stdout.write(`${a+b} `);
    let temp = a;
    a=b;
    b=temp+b;
}
process.stdout.write('\n');
