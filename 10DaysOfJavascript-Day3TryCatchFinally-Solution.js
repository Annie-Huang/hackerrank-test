'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

////////////////////////////////////////////////////////////////////
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        console.log(s.split('').reverse().join(''));
    } catch {
        console.log('s.split is not a function');
        console.log(s);
    } finally {
        // Cannot put printing s into finally block.
        // finally_statements
        // Statements that are executed after the try statement completes.
        // These statements execute regardless of whether an exception was thrown or caught.
    }
}
////////////////////////////////////////////////////////////////////


function main() {
    const s = eval(readLine());

    reverseString(s);
}
