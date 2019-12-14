'use strict';

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
// Complete the minimumBribes function below.
function minimumBribes1(q) {
    // console.log('q=', q);

    let possible = true;
    let swapConter = 0;
    let i = 0;
    let value;
    let newPosition;
    let swapedPositions;
    let temp;

    let tempArray = [];
    for(let j=1; j<=q.length; j++) tempArray.push(j);
    // console.log('tempArray=', tempArray);
    // console.log('----------------------');

    let haveHitLastItem = false;

    while(i < q.length) {
        console.log('i=', i);
        // value = i+1;
        value = q[i];
        console.log('value=', value);

        // console.log('tempArray=', tempArray);
        // value = tempArray[i];

        newPosition = q.indexOf(value);
        // console.log('newPosition=', newPosition);
        swapedPositions = i - newPosition;
        // console.log('swapedPositions=', swapedPositions);

        if (swapedPositions > 2) {
            possible = false;
            break;

        } else if (swapedPositions > 0){

            swapConter += swapedPositions;

            // tempArray.splice(i,1); // remove tempArray[i] from the tempArray.
            // tempArray.splice(i-swapedPositions, 0, value); // Insert it back into the correct position.
            // console.log('tempArray=', tempArray);
        }

        i++;
        // // console.log('i=', i);
        // if (i < q.length-1) {
        //     i++;
        //     // console.log('lineAAAA');

        //     // console.log('final i=', i);
        //     // console.log('final swapConter=', swapConter);
        //     // console.log('----------------------');

        // } else if( i === q.length-1 && !haveHitLastItem) {
        //     haveHitLastItem = true;
        //     // console.log('lineBBBB');
        //     // console.log('Can I get into here????');

        //     // console.log('final i=', i);
        //     // console.log('final swapConter=', swapConter);
        //     // console.log('----------------------');
        // } else {
        //     // console.log('lineCCC');

        //     // console.log('final i=', i);
        //     // console.log('final swapConter=', swapConter);
        //     // console.log('----------------------');
        //     break;
        // }

    }

    console.log('possible=', possible);
    console.log('swapConter=', swapConter);
    console.log('----------------------');

    // return possible ? console.log(swapConter) : console.log('Too chaotic');
}

function minimumBribes(q) {
    let swaps = 0;
    let min = q.length;
    for (var i = q.length - 1; i >= 0; i--){
        if (q[i] - i > 3){
            console.log('Too chaotic');
            return;
        }
        if (q[i] > i+1){
            swaps += (q[i]-(i+1));
        } else {
            if (min > q[i]){
                min = q[i];
            } else if (q[i] != min){
                swaps++;
            }
        }
    }

    console.log(swaps);

}
////////////////////////////////////////////////////////////////////

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
