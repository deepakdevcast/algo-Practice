import inputNumberArray from "../array/input-array.js";

const bubbleSort = (a)=>{
    const n = a.length
    for(let i=0;i<n-1;i++){
        // every iteration (i+1)'th largest element placed in the actual location
        let swap = false
        for(let j=0;j<n-1-i;j++){
            if(a[j]>a[j+1]) {
                let temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
                swap=true
            }
        }
        // swap false means the array is in sorted form
        if(!swap) break;
    }
    return a;
}
const run = async () => {
    let arr = await inputNumberArray();
    console.log(bubbleSort(arr));
}

// await run();
