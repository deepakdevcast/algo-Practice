import { readNumberInput } from "../input.js";
import input2dArrayNumber from "./input-2darray.js";

const linearSearch2dArray = (arr, element) => {
    let row = arr.length;
    let col = arr[0].length;
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            if(arr[i][j]==element) return [i,j];
        }
    }
    return -1;
}

const run = async () => {
    const arr = await input2dArrayNumber();
    const element = await readNumberInput('Enter finding element: ');
    
    console.log(linearSearch2dArray(arr,element));
}

await run();