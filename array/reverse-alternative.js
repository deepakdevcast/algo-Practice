import inputNumberArray from "./input-array.js";

let a = await inputNumberArray();

const swapAlternate = (a) => {
    let pointer = 0;
    while(pointer+1<a.length){
        let temp = a[pointer]
        a[pointer] = a[pointer+1]
        a[pointer+1]=temp
        pointer+=2
    }
    return a;
}

console.log(swapAlternate(a));