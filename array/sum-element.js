
let a = await inputNumberArray();

const sumOfList = (list) => {
    let allElementSum = 0;
    for(let i=0;i<list.length;i++){
        allElementSum+=list[i]
    }
    // approach 2 
    // let allElementSum = a.reduce((previousValue,currentValue)=>{
    // return previousValue+currentValue;
    // },0)
    return allElementSum;
}

console.log(sumOfList(a));