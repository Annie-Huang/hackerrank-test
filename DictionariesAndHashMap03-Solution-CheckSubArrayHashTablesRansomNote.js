'use strict';

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
// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    // console.log('magazine=', magazine);
    // console.log('note=', note);

    // Change magazine to be a map.
    let dictionary = {}
    for (let i = 0; i< magazine.length; i++) {
        if(dictionary[magazine[i]]) {
            dictionary[magazine[i]]++;
        } else {
            dictionary[magazine[i]] = 1;
        }
    }

    for(let i=0; i<note.length; i++) {
        if(!dictionary[note[i]]) {
            console.log('No');
            return;
        } else {
            dictionary[note[i]]--;
            if (dictionary[note[i]] === 0) {
                delete dictionary[note[i]];
            }
        }
    }

    console.log('Yes');
}
////////////////////////////////////////////////////////////////////

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
