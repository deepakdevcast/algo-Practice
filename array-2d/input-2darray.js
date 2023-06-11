import { readNumberInput } from "../input.js";

const input2dArrayNumber = async (rows,cols) => {
    const arr = []
    const row = (rows) ? rows : await readNumberInput("Enter number rows: ");
    const col = (cols) ? cols : await readNumberInput("Enter number columns: ");
    for(let i=0;i<row;i++){
        arr.push([])
        for(let j=0;j<col;j++){
            arr[i].push(await readNumberInput(`Enter value of row ${i} and col ${j}: `))
        }
    }
    return arr
}

export default input2dArrayNumber;