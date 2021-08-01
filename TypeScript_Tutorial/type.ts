export {};
let cnt = 5; // cnt is now number.
cnt = 'a'; // cannot do this assignment.

console.log(cnt);
// it gets compiled but throws an error before compilation.

let a:number;

a=5; //a is of type number
a = 'a'; // a is number, number != string
a = true; // a is number != boolean.


let b: boolean;
let c: string;
let d: any;
let e: number[]; //array of numbers
let f: any[] = [1,true,'a',false,2.45]; //array of any variable type.

// enumerate enum type is a variable type.
// used to group similar variables and give them a number.
enum color {red,green,blue};

let backgroundColor = color.red;

console.log(f);