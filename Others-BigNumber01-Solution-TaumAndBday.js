'use strict';

const fs = require('fs');
const BigNumber = require('bignumber.js');

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

/*
 * Complete the 'taumBday' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER b
 *  2. INTEGER w
 *  3. INTEGER bc
 *  4. INTEGER wc
 *  5. INTEGER z
 */

function taumBday1(b, w, bc, wc, z) {
    // Write your code here
    console.log('b=', b);
    console.log('w=', w);
    console.log('bc=', bc);
    console.log('wc=', wc);
    console.log('z=', z);
    console.log('-------------------')

    b = new BigNumber(b);
    w = new BigNumber(w);
    bc = new BigNumber(bc);
    wc = new BigNumber(wc);
    z = new BigNumber(z);

    //[b, w, bc, wc, z] = [...arguments].map(value => new BigNumber(value));

    if(bc>wc+z) {
        // return wc * (w+b) + z * b;
        return wc.times(w.plus(b)).plus(z.times(b)).toFixed();

    } else if(wc>bc+z) {
        // return bc * (w+b) + z * w;
        return bc.times(w.plus(b)).plus(z.times(w)).toFixed();

    } else {
        // return wc * w + bc * b;
        // Not sure why it failed fo this when using bignumber, it passed when just using wc * w + bc * b
        console.log('i should be in here...');
        console.log('wc.times(w)=', wc.times(w).toFixed());
        console.log('bc.times(b)=', bc.times(b).toFixed());
        console.log('wc.times(w).plus(bc.times(b))=', wc.times(w).plus(bc.times(b)).toFixed());
        return wc.times(w).plus(bc.times(b)).toFixed();
    }

}

function taumBday (b, w, bc, wc, z) {
    [b, w, bc, wc, z] = [...arguments].map(x => new BigNumber(x))
    let tbc = BigNumber.min( b.times(bc), b.times(wc).plus(b.times(z)) )
    let twc = BigNumber.min( w.times(wc), w.times(bc).plus(w.times(z)) )
    return tbc.plus(twc).toFixed()
}
////////////////////////////////////////////////////////////////////


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const b = parseInt(firstMultipleInput[0], 10);

        const w = parseInt(firstMultipleInput[1], 10);

        const secondMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const bc = parseInt(secondMultipleInput[0], 10);

        const wc = parseInt(secondMultipleInput[1], 10);

        const z = parseInt(secondMultipleInput[2], 10);

        const result = taumBday(b, w, bc, wc, z);

        ws.write(result + '\n');
    }

    ws.end();
}
