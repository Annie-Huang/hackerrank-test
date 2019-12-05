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
// Complete the hourglassSum function below.
function hourglassSum(arr) {
    console.log('arr=', arr);

    let row0, row1, row2;
    let resultArr = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];

    for(let i=0; i<4; i++) {
        row0 = arr[i];
        row1 = arr[i+1];
        row2 = arr[i+2];

        for(let j=0; j<4; j++) {
            resultArr[i][j] +=  row0[j] + row0[j+1] + row0[j+2] +
                                          row1[j+1] +
                                row2[j] + row2[j+1] + row2[j+2];
        }
    }

    return Math.max(Math.max(...resultArr[0]), Math.max(...resultArr[1]), Math.max(...resultArr[2]), Math.max(...resultArr[3]));

}
////////////////////////////////////////////////////////////////////

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
