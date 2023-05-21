//Question 1
console.log("*** Question 1 ***")
for(let i=0;i<=5;i++){
    process.stdout.write(`${i} `);
    i+=1;
}
process.stdout.write('\n');

//Question 2
console.log("*** Question 2 ***")
for(let i=0;i<=15;i+=2){
    process.stdout.write(`${i} `);
    if(i&1) continue;
    i+=1;
}
process.stdout.write('\n');

//Question 3
console.log("*** Question 3 ***")
for(let i=0;i<5;i++){
    for(let j=i;j<=5;j++){
        process.stdout.write(`${i} ${j}`);
        process.stdout.write('\n');
    }
}
process.stdout.write('\n');

//Question 4
console.log("*** Question 4 ***")
for(let i=0;i<5;i++){
    for(let j=i;j<=5;j++){
        if(i+j==10){
            break;
        }
        process.stdout.write(`${i} ${j}`);
        process.stdout.write('\n');
    }
}
process.stdout.write('\n');