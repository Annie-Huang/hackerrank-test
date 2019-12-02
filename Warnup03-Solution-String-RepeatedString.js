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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    console.log('s=', s);
    console.log('n=', n);

    let strArray = Array.from(s);
    let strArrayLength = strArray.length;
    let strACounters = strArray.filter(char => char === 'a').length;
    console.log('strACounters=', strACounters);

    let subStringTimes = Math.floor(n / strArrayLength);
    let subStringReminder = n % strArrayLength;

    console.log('subStringTimes=', subStringTimes);
    console.log('subStringReminder=', subStringReminder);

    let finalStr = s.substring(0, subStringReminder);
    console.log('finalStr=', finalStr);
    let finalACounters = Array.from(finalStr).filter(char => char === 'a').length;
    console.log('finalACounters=', finalACounters);

    return subStringTimes * strACounters + finalACounters;


}
////////////////////////////////////////////////////////////////////


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
