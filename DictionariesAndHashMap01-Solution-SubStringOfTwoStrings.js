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
// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    console.log('s1=', s1);
    console.log('s2=', s2);

    // Just need to check if one character in one string exist in another string.

    // For the words that is longer, change it to hashmap so we can iterate less loops
    let longerArray = 's2';
    if(s1.length > s2.length) longerArray = 's1';

    let iterateArray = longerArray === 's2' ? s1 : s2;
    let hashArray = longerArray === 's2' ? s2 : s1;

    // Convert hashArray into a hashmap
    let hashMap = new Map();
    let key;
    for(let i=0; i<hashArray.length; i++) {
        key = hashArray[i];
        hashMap.set(key, key);
    }

    for (let i=0; i<iterateArray.length; i++) {
        if(hashMap.has(iterateArray[i])) return 'YES';
    }

    return 'NO';
}
////////////////////////////////////////////////////////////////////


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        ws.write(result + "\n");
    }

    ws.end();
}
