'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

////////////////////////////////////////////////////////////////////
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    console.log('n=', n);
    let sortedArray = ar.sort();
    console.log('sortedArray=', sortedArray);
    let result = 0;
    while(sortedArray.length > 1) {
        if(sortedArray[0] === sortedArray[1]) {
            sortedArray.shift(); sortedArray.shift();
            result++;
        } else {
            sortedArray.shift();
        }
        console.log('sortedArray=', sortedArray);
    }

    return result;
}
////////////////////////////////////////////////////////////////////

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
