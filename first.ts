let fullName: string = 'mehul chopra';
const age: number = 33;
const pi: number = 3.14;
let lightsOn: (number | boolean) = true;
lightsOn = 1;
lightsOn = true;
// lightsOn = 'mehul'; // will not work

let y: any = 9; // can take value of any data type
y = 'mehul';
y = true;
y = 5.6;

let z: number; // give value at a later point in time
z = 9;
// z = 'mehul'; // will not work

// const j: number; // will not work as const needed to be initialized at the line of declaration

// redeclaration of variables is not allowed in typescript
// const lightsOn: number = 1; // this will not work

let mn;
// no auto inferencing of type here
mn = 'mehul';
mn = 1;

let x: number = 1;
x = 4;
// x = 'mehul'; // will not work as tsc expects only a number for x

const pointers: number[] = [5, 6, 3, 6, 10, 9];
const switches: (number|boolean)[] = [1, 0, 1, 1, true, 0, false, 1, 0]; 
// can take either number or boolean element

