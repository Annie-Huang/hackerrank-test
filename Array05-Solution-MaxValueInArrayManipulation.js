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
// Complete the arrayManipulation function below.
function arrayManipulation1(n, queries) {
    // console.log('n=', n);
    // console.log('queries=', queries);

    // n= 5
    // queries= [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]

    let dictionary = {};
    for(let i=1; i<=n; i++) {
        dictionary[i] = 0;
    }

    let size = queries.length;
    let op;
    let start, end, amount;
    console.log('size=', size);
    for(let i=0; i<size; i++) {
        op = queries[i];
        // console.log('op=', op);
        for(let j=op[0]; j<=op[1]; j++) {
            dictionary[j] += op[2];
        }
    }

    return Math.max(...Object.values(dictionary));
}

function arrayManipulation(n, queries) {
    const arr = new Array(n+1).fill(0);
    let result = 0;

    queries.forEach(([a, b, k]) => {
        arr[a-1] += k;
        arr[b] -= k;
    });

    arr.reduce((a, b) => {
        const acc = a + b;
        result = Math.max(result, acc);
        return acc;
    }, 0);

    return result;
}
////////////////////////////////////////////////////////////////////

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
