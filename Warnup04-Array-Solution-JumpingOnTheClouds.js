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
// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    // console.log('c=', c);
    // console.log('--------------------------------');

    let jump = 0;
    let i = 0;
    let acc = 0;
    let nextItemExist = false;

    // The important assumption to make, even though i think it's incorrect, is that it doesn't have
    // consecutive thunderheads.
    while(i < c.length) {
        // console.log('i=', i);
        // console.log('c[i]=', c[i]);
        // console.log('c[i+1]=', c[i+1]);

        // Cannot use c[i+1] because when the value is 0, it is false. What we want to check is that if the item exist.
        nextItemExist = i < c.length-1;

        if(nextItemExist && c[i] !== c[i+1]) {
            // console.log('pointA...');
            if(acc === 1) {
                jump++;
                acc = 0;
            }
            jump++;
            i += 2;
        } else if (nextItemExist && c[i] === c[i+1]) {
            // console.log('pointB...');

            acc++;
            // console.log('what is acc??', acc);

            if(acc === 2) {
                i++;
                acc = 0;
                jump++;
            } else {
                i++;
            }

        } else {
            // console.log('pointC...');

            // c[i+1] does not exist.
            i++;
        }

        // console.log('i=', i);
        // console.log('acc=', acc);
        // console.log('jump=', jump);
        // console.log('--------------------------------');
    }

    // handle special case when the last two numbers are 0;
    if (acc === 1) jump++;

    return jump;

}
////////////////////////////////////////////////////////////////////

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
