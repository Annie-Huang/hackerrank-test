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
// Complete the equalizeArray function below.
function equalizeArray(arr) {
    console.log('arr=', arr);

    let dictionary  = {};
    for(let i=0; i<arr.length; i++) {
        if (dictionary[arr[i]]) {
            dictionary[arr[i]]++
        } else {
            dictionary[arr[i]] = 1;
        }
    }
    // console.log('dictionary=', dictionary);
    let countArr = Object.values(dictionary);
    // console.log('countArr=', countArr);
    let max = Math.max(...countArr);
    // console.log('max=', max);
    return arr.length - max;
}
////////////////////////////////////////////////////////////////////

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}
