import inputNumberArray from "../array/input-array.js";

const partition = (arr,start,end) =>{
    let pivot = start;
    for(let i=start;i<=end;i++){
        if(arr[start]>arr[i]){
            pivot+=1
        }
    }
    let temp = arr[pivot]
    arr[pivot] = arr[start]
    arr[start] = temp
    let i=0;
    let j=end;
    while(i<pivot && j>pivot){
        if(arr[i]<=arr[pivot]){
            i+=1
        }
        else if(arr[j]>=arr[pivot]){
            j-=1
        }
        else if(arr[i]>arr[pivot] && arr[j]<arr[pivot]){
            let temp = arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            i+=1
            j-=1
        } else{
            i+=1
            j-=1
        }
    }
    return pivot;
}

const quickSort = (arr,start,end) => {
    if(start>end) return;
    let pivot = partition(arr,start,end);
    console.log(pivot, arr);
    quickSort(arr,start,pivot-1)
    quickSort(arr,pivot+1,end);
}

const run = async () => {
    const arr =  await inputNumberArray();
    quickSort(arr,0,arr.length-1)
    console.log(arr);
}

await run();