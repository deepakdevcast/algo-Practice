import inputNumberArray from "../array/input-array.js";
import { readNumberInput } from "../input.js";

// https://www.codingninjas.com/codestudio/problems/allocate-books_1090540

let bookPages = await inputNumberArray();
let students = await readNumberInput("Enter No. of Students: ");

const allocateBooks = (bookPages, students) => {
    let end = bookPages.reduce((previous,current)=> previous+current,0);
    let start =  Math.min(...bookPages);
    let mid;
    let ans=-1;
    while(start<=end){
        mid = parseInt(start + (end-start)/2)
        console.log('mid is:', mid)
        let i=0
        let part=1;
        let sum=0
        while(i<=bookPages.length-1 && part<=students){
            sum+=bookPages[i]
            if(sum<=mid) {
                i+=1
            }
            else{
                part+=1
                sum=0
            }
            console.log(sum,part,i)
        }
        if(part>students){
            start=mid+1
            console.log('rejected:',mid)
        }
        else{
            end=mid-1
            ans = mid
            console.log('accepted:',ans)
        }
    }
    return ans
}

console.log(allocateBooks(bookPages,students));