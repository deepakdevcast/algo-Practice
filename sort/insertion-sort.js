import inputNumberArray from "../array/input-array.js";

const insertionSort = (a)=>{
    const n = a.length
    for(let i=0;i<n-1;i++){
        // every interation (i+1)th largest element placed in actual location
        let temp = a[i+1]
        let j=i
        while(j>=0&&temp<a[j]){
            a[j+1]=a[j]
            j-=1
        }
        a[j+1] = temp;
    }
    return a;
}
const run = async () => {
    let arr = await inputNumberArray();
    console.log(insertionSort(arr));
}

await run();