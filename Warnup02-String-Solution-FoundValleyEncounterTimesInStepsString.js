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
// Complete the countingValleys function below.
function countingValleys(n, s) {
    console.log('n=', n);
    console.log('s=', s);

    let valleyStepsAcc = 0;
    let valleyEncounter = 0;
    let stepDirection = '';

    while(s.length > 0) {
        if(s[0] === 'U') valleyStepsAcc--;
        if(s[0] === 'D') valleyStepsAcc++;

        if(!stepDirection) stepDirection = s[0];

        if(valleyStepsAcc === 0) {
            if(stepDirection === 'D') valleyEncounter++;

            // Reset stepDirection
            stepDirection = '';
        }

        // Remove the first character in the string
        s=s.substring(1);
    }

    return valleyEncounter;

}
////////////////////////////////////////////////////////////////////


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
