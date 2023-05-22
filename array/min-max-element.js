let a = await inputNumberArray();

const findMIinMaxInList = (list)=>{
    // Approach 1
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(let i=0;i<list.length;i++){
        if(min>list[i]) min = list[i]
        if(max<list[i]) max = list[i]
    }
    // Approach 2
    // let min = Math.min(...list);
    // let max = Math.max(...list);
    return [min, max]
}

console.log(findMIinMaxInList(a));
