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
// Complete the encryption function below.
function encryption(s) {
    // console.log('s=', s);

    // Remove white space.
    s = s.replace(/\s/gi, '');
    // console.log('s=', s);

    const length = s.length;
    let rows = Math.floor(Math.sqrt(length));
    const cols = Math.ceil(Math.sqrt(length));
    // console.log('rows=', rows);
    // console.log('cols=', cols);

    if(rows*cols < length) {
        rows = Math.ceil(length / cols);
        // console.log('rows=', rows);
    }

    let array = s.split('');
    let newArray = []; // two dimensional array.
    let z = 0;
    for(let i=0; i<=rows; i++) {
        newArray[i] = [];
        for(let j=0; j<cols; j++) {
            z < array.length ? newArray[i].push(array[z]) : newArray[i].push(' ');
            z++;
        }
        // console.log('newArray[i]=', newArray[i]);
    }

    let newArray2 = []; // one dimensional array.
    for(let i=0; i<cols; i++) {
        for(let j=0; j<=rows; j++) {
            newArray2.push(newArray[j][i]);
        }
    }
    // console.log('newArray2=', newArray2);
    return newArray2.join('').replace(/  /gi, ' ').trim();
}
////////////////////////////////////////////////////////////////////

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = encryption(s);

    ws.write(result + "\n");

    ws.end();
}
