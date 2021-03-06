'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

////////////////////////////////////////////////////////////////////
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let englishVowels = ['a', 'e', 'i', 'o', 'u'];
    let vowels = [];
    let consonants = [];

    for(let i=0; i<s.length; i++) {
        if (englishVowels.includes(s[i])) {
            vowels.push(s[i])
        } else {
            consonants.push(s[i])
        }
    }

    for(let i=0; i<vowels.length; i++) {
        console.log(vowels[i]);
    }
    for(let i=0; i<consonants.length; i++) {
        console.log(consonants[i]);
    }
}
////////////////////////////////////////////////////////////////////


function main() {
    const s = readLine();

    vowelsAndConsonants(s);
}
