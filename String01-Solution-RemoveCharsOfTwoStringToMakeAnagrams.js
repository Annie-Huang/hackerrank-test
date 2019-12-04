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
// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    // We consider two strings to be anagrams of each other
    // if the first string's letters can be rearranged to form the second string.
    // In other words, both strings must contain the same exact letters in the same exact frequency

    console.log('a=', a);
    console.log('b=', b);

    // Would rather use splice function which only available in array, not string.
    let arrayA = a.split('');
    let arrayB = b.split('');
    // console.log('arrayA.length=', arrayA.length);
    // console.log('arrayB.length=', arrayB.length);
    // console.log('---------------------');
    let bIndex;
    for(let i=0; i<arrayA.length;) {
        bIndex = arrayB.indexOf(arrayA[i]);
        console.log('bIndex=', bIndex);

        if(bIndex !== -1) {
            arrayA.splice(i, 1);
            arrayB.splice(bIndex, 1);

            // console.log('arrayA=', arrayA);
            // console.log('arrayB=', arrayB);
        } else {
            i++;
        }

        // console.log('i=', i);
        // console.log('---------------------');
    }

    return arrayA.length + arrayB.length;
}
////////////////////////////////////////////////////////////////////

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine();

    const b = readLine();

    const res = makeAnagram(a, b);

    ws.write(res + '\n');

    ws.end();
}
