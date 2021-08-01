// writing export {}, exports nothing....
// this helps in getting rid of the duplicate function implementation error.
export {};

function log(message:any):any{
    console.log(message);
}

log("hello world");

function doSomething():void {
    // using var for declaring i means i is not just in scope
    // of the for loop, it is in the scope of the function.
    // using let to declare i means i is only in the scope of the
    // for loop.
    for(var i=0;i<5;i++)
    {
        log(i);
    }
    // using let to define i, throws an error here... like in other languages.
    log("finally: " + i);
    // using let instead of var is better. it keeps confusions to a minimum.
}

doSomething();

// always use let!!