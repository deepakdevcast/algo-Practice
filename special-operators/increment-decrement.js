let a=1;
let b=2;
let c=1;
let d=2;
// Increment operators
// ++
    // ++a => post-increment
    // a++ => pre-increment
    console.log('before a: ',a ,'post + of a: ',++a,'and after a: ',a);
    console.log('before c: ',c ,'pre + of c: ',c++,'and after c: ',c);

    // Decrement operators
// --
    // --a => post-decrement
    // a-- => pre-decrement
    console.log('before b: ',b ,'post - b: ',--b,'and after b: ',b);
    console.log('before d: ',d,'pre - d : ',d--,'and after d ',d);

// Question 1
console.log("*** Question 1 ***")
let a1=10;
let b1=1;
if(++a1) console.log(b1);
else console.log(++b1);

// Question 2
console.log("*** Question 2 ***")
let a2=1;
let b2=2;
if(a2-- > 0 && ++b2 > 2) console.log('Stage 1 - Inside if');
else console.log('Stage 2 - Inside else');
console.log(a2,b2);

// Question 3
console.log("*** Question 3 ***")
let a3=1;
let b3=2;
if(a3-- > 0 || ++b3 > 2) console.log('Stage 1 - Inside if');
else console.log('Stage 2 - Inside else');
console.log(a3,b3);

// Question 4
console.log("*** Question 4 ***")
let a4=3;
console.log(25*(++a4))

// Question 5
console.log("*** Question 5 ***")
let a5=1;
let b5=a5++;
let c5=++a5;
console.log(b5,c5);