import input2dArrayNumber from "./input-2darray.js";

const print2dArrayInSpiral = (a) => {
    let row = a.length
    let col = a[0].length
    let firstrow = 0
    let endcol = col - 1
    let endrow = row - 1
    let arr = []
    let firstcol = 0
    let count = 0
    while(count<(a.length)*(a[0].length)){
        for(let i=firstcol;i<=endcol;i++){
            arr.push(a[firstrow][i])
            count+=1
        }
        for(let i=firstrow+1;i<=endrow;i++){
            arr.push(a[i][endcol])
            count+=1
        }
        for(let i=endcol-1;i>=firstcol;i--){
            arr.push(a[endrow][i])
            count+=1
        }
        for(let i=endrow-1;i>=firstrow+1;i--){
            arr.push(a[i][firstcol])
            count+=1
        }
        firstcol+=1
        firstrow+=1
        endcol-=1
        endrow-=1
    }
    return arr.splice(0,(a.length)*(a[0].length));
}
const run = async () =>{
    // const arr = await input2dArrayNumber();
    const arr = [[1,2],[4,5]]
    console.log(print2dArrayInSpiral(arr))
}
await run();