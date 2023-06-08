import inputNumberArray from "../array/input-array.js";

const merge = (arr,start,end) => {
    let sortedArr = []
    let mid = parseInt(start + (end - start)/2)
    let p1 = start
    let p2 = mid+1
    while(p1<=mid && p2<=end){
        if(arr[p1]>=arr[p2]){
            sortedArr.push(arr[p2])
            p2+=1
        }
        else{
            sortedArr.push(arr[p1])
            p1+=1
        }
    }
    while(p1<=mid){
        sortedArr.push(arr[p1])
        p1+=1
    }
    while(p2<=end){
        sortedArr.push(arr[p2])
        p2+=1
    }
    for(let i=start;i<=end;i++){
        arr[i] = sortedArr[i-start]
    }
    return arr;
}
const mergeSort = (arr,start,end) => {
    if(start >= end){
        return;
    }
    let mid = parseInt(start + (end - start)/2)
    console.log(mid)
    mergeSort(arr,start,mid)
    mergeSort(arr,mid+1,end)
    merge(arr,start,end);
}

const run = async () => {
    const arr = await inputNumberArray();
    console.log(mergeSort(arr,0,arr.length-1));
    console.log(arr);
}
await run()