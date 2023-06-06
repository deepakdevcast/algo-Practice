import { readNumberInput } from "./input.js";

const gcd = (a,b) =>{
    while(a>0 && b>0){
        if(a>b){
            a=a-b
            b=b
        }else{
            let temp = b
            b=a
            a=temp-a
        }
    }
    return b
}

const run = async () => {
    // let a = await readNumberInput('First no.: ');
    // let b = await readNumberInput('Second no.: ');
    // let ans = gcd(a,b);
    // console.log(ans);
    let arr = [1,2,3]
    let i=2
    console.log(arr);
}

await run();