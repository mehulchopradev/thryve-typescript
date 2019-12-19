export function perimeter(length: number, breadth: number): number {
    return 2 * (length + breadth);
}

const p1: number = perimeter(4, 5);
console.log(p1);

// const p2: number = perimeter(5); // will not work as tsc expects same number of arguments

function area(length: number, breadth?: number): number {
    // breadth becomes an optional parameter with a default value of undefined
    return length * breadth;
}

export const a1: number = area(4);
console.log(a1);

/* function add(x: number, y: number = 2): number {
    // number becomes an optional parameter but with a default value of our choice
    return x + y;
} 

const ans: number = add(4);
console.log(ans); */

// signature declarations
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// general implementation of those signatures
function add(a, b) {
    return a + b;
}

console.log(add(5, 4)); 
console.log(add('mehul', 'chopra'));
// console.log(add(true, false)); // will not work

// 0 to n arguments
// Rest operator
function myAdd(...nos: number[]): number {
    let sum: number = 0;
    for(let num of nos) {
        sum += num;
    }

    return sum;
}

console.log(myAdd());
console.log(myAdd(6, 5, 3, 4, 10, 5));