import input2dArrayNumber from '../array-2d/input-2darray.js';
import { readNumberInput } from '../input.js';

const paths = (maze,visited,row=0,col=0,path='') => {
    if(row == maze.length - 1 && col == maze[0].length - 1){
        console.log(path)
        return
    }
    // if(row>=maze.length || col>=maze[0].length || row<0 || col<0) return
    visited[row][col] = 1
    if(row-1 >= 0 && maze[row-1][col] === 1 && visited[row-1][col] == 0) {
        path+='U'
        paths(maze,visited,row-1,col,path)
        path = path.substring(0,path.length - 1)
    }
    if(row+1<=maze.length-1 && maze[row+1][col] === 1  && visited[row+1][col] == 0) {
        path+='D'
        paths(maze,visited,row+1,col,path)
        path = path.substring(0,path.length - 1)
    }
    if(col+1<=maze[0].length-1 && maze[row][col+1] === 1  && visited[row][col+1] == 0) {
        path+='R'
        paths(maze,visited,row,col+1,path)
        path = path.substring(0,path.length - 1)
    }
    if(col-1>=0 && maze[row][col-1] === 1  && visited[row][col-1] == 0) {
        path+='L'
        paths(maze,visited,row,col-1,path)
        path = path.substring(0,path.length - 1)
    }
    visited[row][col] = 0
}

const run = async () => {
    const row = await readNumberInput("enter no. of rows: ")
    const col = await readNumberInput("enter no. of columns: ")
    const maze = await input2dArrayNumber(row, col);
    const visited = []
    for(let i=0;i<row;i++){
        visited.push((new Array(col)).fill(0))
    }
    console.log(visited)
    console.log(maze)
    console.log(paths(maze,visited))
}

await run();