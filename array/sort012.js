import inputNumberArray from "./input-array.js";

let a = await inputNumberArray();

// two pointer
const sort012 = (a)=>{
    let pointeri = 0;
    let pointerj = a.length - 1;
    while(pointeri<pointerj){
        if(a[pointeri]==0) pointeri+=1
        if(a[pointerj]!=0) pointerj-=1
        if(a[pointerj]==0){
            let temp = a[pointeri]
            a[pointeri]=a[pointerj]
            a[pointerj]=temp
            pointerj-=1
        }
    }
    console.log(pointeri)
    pointerj = a.length - 1;
    while(pointeri<pointerj){
        if(a[pointeri]==1 || a[pointeri]==0) pointeri+=1
        if(a[pointerj]==2) pointerj-=1
        if(a[pointeri]==2 && a[pointerj]==1){
            let temp = a[pointeri]
            a[pointeri]=a[pointerj]
            a[pointerj]=temp
            pointeri+=1
            pointerj-=1
        }
    }

    return a;
}
console.log(sort012(a));