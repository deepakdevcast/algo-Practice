let a=4;
let b=6;

// & AND-bitwise operator - both bits as to be 1
console.log(a&b);

// | OR-bitwise operaton - either bits as to be 1
console.log(a|b);

// ~ NOT-bitwise operaton - change bits 1->0 and vice-versa
// for solving NOT-bitwise manually(on-paper)
    // after change bits 1->0 and 0->1,
    // if the right most bit is 1 and it means a -ve number and
    // we have to do 2's complement's,
    // 2's complement is: 1's complement + 1
// 1's complement is: convert 1->0 and 0->1.
console.log(~a);

// ^ XOR-bitwise operaton - either of bits as to be 1 but not both can be 1
console.log(a^b);
