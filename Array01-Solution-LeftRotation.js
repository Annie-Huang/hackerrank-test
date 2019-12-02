'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

////////////////////////////////////////////////////////////////////
// Complete the rotLeft function below.
function rotLeft(a, d) {
    // console.log('a=', a);
    // console.log('d=', d);
    // console.log('-----------------');

    // if (d<=0) return a;

    let remainder = d % a.length;

    for (let i = 0; i < remainder; i++) {
        let char = a[0];
        // console.log('char=', char);
        a.shift();
        // console.log('a=', a);
        a.push(char);
        // console.log('a=', a);
        // console.log('-----------------');
    }

    return a;
}
////////////////////////////////////////////////////////////////////


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
