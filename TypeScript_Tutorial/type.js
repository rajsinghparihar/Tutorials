"use strict";
exports.__esModule = true;
var cnt = 5; // cnt is now number.
cnt = 'a'; // cannot do this assignment.
console.log(cnt);
// it gets compiled but throws an error before compilation.
var a;
a = 5; //a is of type number
a = 'a'; // a is number, number != string
a = true; // a is number != boolean.
var b;
var c;
var d;
var e; //array of numbers
var f = [1, true, 'a', false, 2.45]; //array of any variable type.
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
})(color || (color = {}));
;
var backgroundColor = color.red;
console.log(f);
