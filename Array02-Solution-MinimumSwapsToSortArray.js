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
// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    console.log('arr=', arr);

    // The key to understand this problem is that it is CONSECUTIVE number without duplicate from the minimum number onwards.
    // In my opinion, it SHOULD stated that it is always start from 1 as well.
    // Because it's sort of magic number that overlap the concept of positioning....
    // I found this answer from discussion pannel.

    let swapCount = 0;
    let minValue = Math.min(...arr);
    console.log('minValue=', minValue);
    let temp;
    let i = 0;

    console.log('--------------------');

    while(i < arr.length - 1) {
        let itemShouldBePosition = arr[i] - minValue;
        // console.log('itemShouldBePosition=', itemShouldBePosition);

        if(itemShouldBePosition != i) {
            // console.log('item is NOT in the correct position.');
            temp = arr[i];
            arr[i] = arr[itemShouldBePosition];
            arr[itemShouldBePosition] = temp;
            // console.log('arr=', arr);
            swapCount++;
            // console.log('swapCount=', swapCount);

        } else {
            // console.log('item is in the correct position.');
            i++;
        }

        // console.log('--------------------');

    }

    return swapCount;


}

////////////////////////////////////////////////////////////////////


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
