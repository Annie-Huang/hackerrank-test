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
// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    console.log('s=', s);

    const dictionary = {};
    let count = 0;
    let subStringWithSort

    for(let i=0; i<s.length; i++) {
        // Have to do s.length+1 because substring(start, end) is excluding end positino
        for(let j=i+1; j<s.length+1; j++) {
            subStringWithSort = s.substring(i,j).split('').sort().join('');

            if(dictionary[subStringWithSort]) {
                // 1st time, it will go to the else condition. do nothing.
                // 2nd time we encounter the substring again,
                //      we said we found the first pair. so dictionary[subStringWithSort] = 1, we add it to count and increase dictionary[subStringWithSort] to 2
                // 3nd time we encounter the substring again,
                //      because we already got two encounter before, the new encounter can pair up with any of these two encounter,
                //      so we add dictionary[subStringWithSort], which is 2, into count. And increase dictionary[subStringWithSort] 3
                // 4th time we encounter the substring again,
                //      because we already got trhee encounter before, the new encounter can pair up with any of these three encounter,
                //      so we add dictionary[subStringWithSort], which is 3, into count. And increase dictionary[subStringWithSort] 4
                count += dictionary[subStringWithSort];
                dictionary[subStringWithSort]++;
            } else {
                dictionary[subStringWithSort] = 1;
            }
        }
    }

    return count;

}
////////////////////////////////////////////////////////////////////

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}
