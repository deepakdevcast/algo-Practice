import inputNumberArray from "./input-array.js";

const sumTwoArray = (arr1,arr2) => {
    let nums1 = 0
    let nums2 = 0
    for(let i=arr1.length-1;i>=0;i--){
        nums1+=arr1[arr1.length-1-i]*(10**i)
    }
    for(let i=arr2.length-1;i>=0;i--){
        nums2+=arr2[arr2.length-1-i]*(10**i)
    }
    console.log(nums1,nums2);
    return (nums1+nums2)
}
const run = async () => {
    let arr1 = await inputNumberArray();
    let arr2 = await inputNumberArray();
    console.log(sumTwoArray(arr1,arr2));
}

await run();