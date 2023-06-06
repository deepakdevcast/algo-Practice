import { readNumberInput } from "../input.js";

const countDistinctWayClimbStair = (n) =>{
    if (n<0){
        return 0
    }
    if (n==0){
        return 1
    }
    let n1 = countDistinctWayClimbStair(n-1)
    let n2 = countDistinctWayClimbStair(n-2)
    return n1+n2;
}

const run = async () => {
    let n = await readNumberInput('Enter number of stairs: ');
    console.log(countDistinctWayClimbStair(n,0));
}

await run();