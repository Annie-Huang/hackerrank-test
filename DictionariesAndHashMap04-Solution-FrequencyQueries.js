'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

////////////////////////////////////////////////////////////////////

// Complete the freqQuery function below.
function freqQuery(queries) {
    console.log('queries=', queries);

    let freqDict = {};

    queries.forEach(query => {
        if(query[0] === 1) {
            freqDict[query[1]] ? freqDict[query[1]]++ : freqDict[query[1]] = 1;

        } else if (query[0] === 2 && freqDict[query[1]]) {
            freqDict[query[1]]--;
            if(freqDict[query[1]] === 0) delete freqDict[query[1]];

        } else if (query[0] === 3) {

        }
    });

    console.log('freqDict=', freqDict);
}

////////////////////////////////////////////////////////////////////




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}
