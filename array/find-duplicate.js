import inputNumberArray from "./input-array.js";

let a = await inputNumberArray();

const findUniqueUsingDict = (a) => {
    const dict = {}
    for(let i=0;i<a.length;i++){
        if(dict[a[i]]) dict[a[i]]+=1
        else dict[a[i]]=1
    }
    let uniq = []
    Object.entries(dict).forEach(([value,count])=>{
        if(count>1) uniq.push(Number(value));
    })
    return uniq;
}

console.log(findUniqueUsingDict(a))