import inputNumberArray from "../array/input-array.js";

const selectionSort = (a)=>{
    const n = a.length
    for(let i=0;i<n-1;i++){
        let min = i
        for(let j=i+1;j<n;j++){
            if(a[j]<=a[min]) {
                min = j
            }
        }
        let temp = a[i]
        a[i] = a[min]
        a[min] = temp
    }
    return a;
}
const run = async () => {
    let arr = await inputNumberArray();
    console.log(selectionSort(arr));
}

// await run();