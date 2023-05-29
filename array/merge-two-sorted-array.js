import inputNumberArray from "./input-array.js";

const mergeTwoSortedArray = (arr1, arr2) =>{
    let pointer1 = 0;
    let pointer2 = 0;
    let mergeArr = []
    while(pointer1<arr1.length && pointer2<arr2.length){
        if(arr1[pointer1]<=arr2[pointer2]){
            mergeArr.push(arr1[pointer1])
            pointer1+=1
        }
        else{
            mergeArr.push(arr2[pointer2]);
            pointer2+=1
        }
    }
    while(pointer1<arr1.length){
        mergeArr.push(arr1[pointer1])
        pointer1+=1
    }
    while(pointer2<arr2.length){
        mergeArr.push(arr2[pointer2])
        pointer2+=1
    }
    return mergeArr;
}
const run = async ()=>{
    let arr1 = await inputNumberArray();
    let arr2 = await inputNumberArray();
    console.log(mergeTwoSortedArray(arr1,arr2))
}

await run();