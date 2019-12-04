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

// Complete the activityNotifications function below.
// unfinished code....
function activityNotifications1(expenditure, d) {
    console.log('expenditure=', expenditure);
    console.log('d=', d);

    // let tempArray;
    // let currentDateExpenditure;

    let notificationCount = 0;

    let oddNumberForDatesLength = true;
    let leftIndex, rightIndex, medianIndex;
    let left, right, median;

    // Method we will use is SortCount, create a secondary array (countArray) so we don't need to resort every time.
    // So O(n) instead of O(n^2)
    // https://www.youtube.com/watch?v=7zuGmKfUt7s (Counting Sort | GeeksforGeeks)
    // https://www.youtube.com/watch?v=OKd534EWcdk (Learn Counting Sort Algorithm in LESS THAN 6 MINUTES!)
    // I serious don't like all these algorithm...

    // Step1: Find out whether we have d as odd number of even number.
    // Even number
    if( d % 2 === 0) {
        oddNumberForDatesLength = false;
        leftIndex = Math.floor(d/2);
        rightIndex = leftIndex + 1;

    } else {
        // Odd number
        medianIndex  = Math.floor(d/2);
    }

    // Step2: Create countArray
    // Creat an array that has the size of the maximum length of expenditure array.
    countArray = Array(201).fill(0);

    // Step3: Fill initial 0 - (d-1)
    // Fill the array with the first d number of position so we can have a base.
    for(let i=0; i<d.length; i++) {
        // e.g. for array [2,3,4,2,3,6,8,4,5], d=5, for first 5 numbers,
        // we will have countArray[0,0,2,2,1,0,1,0], e.g. we have two incidences number 3, so in countArray[3]=2;
        countArray[exp[i]]++;
    }

    // Step4: Loop through from from position d to the end of expenditure array.
    let i = 0;
    while(i + d < expenditure.length) {

        //Step4.1 Find in the countArray, which accumulated position reach the leftIndex position
        for(let j=0, leftAccumulated=0; leftAccumulated<=leftIndex; j++) {
            if(leftAccumulated + countArray[j] < leftIndex) {
                leftAccumulated += countArray[j];
            }
            left = j;
        }


        // console.log('i=', i);
        // tempArray = expenditure.slice(i, d+i);
        // currentDateExpenditure = expenditure[i+d];
        // median = findMedianFromArray(tempArray, d);


        // console.log('currentDateExpenditure=', currentDateExpenditure);
        // console.log('median=', median);

        if(currentDateExpenditure >= median * 2) {
            notificationCount++;
        }

        i++;
        // console.log('notificationCount=', notificationCount);
        // console.log('-------------------------------------');
    }

    return notificationCount;

}

function activityNotifications(exp, d) {
    // count notifications
    let notifications = 0;

    // median position in the array
    // those will be the same for even days
    const leftIdx = Math.floor((d - 1) / 2);
    const rightIdx = Math.ceil((d - 1) / 2);
    let left, right, median;

    // initialize empty counting array with length
    // equals to max possible expedition value
    // (plus one to basically ignore 0)
    const count = Array(201).fill(0);

    // fill counting array with previous days counts
    for (let i = d - 1; i >= 0; i--) {
        count[exp[i]] += 1;
    }

    // loop through rest
    for (let i = d, len = exp.length; i < len; i++) {
        // The index of count corresponds to the actual expenditures
        // numbers met so far.
        // The extremely smart (and sick) way to find the median is:
        // 1. We start a loop with 2 variables initialized
        // 2. First one (j) (with no effect on the breaking condiftion)
        //    is just incremented by 1 on every iteration.
        // 3. Second one (k) is the breaking condition.
        //    It accumulates the counts on every counting
        //    array element till it reaches the previously
        //    calculated leftIndex - count is > 0 only when
        //    previously indexed by existing expidenture value.
        //    For example count[3] = 2 means we have
        //    numer 2 times number 3, so it counts as 2 indecies
        //    increment towards our desired leftIdx.
        // 4. While iterating, "j" variable is incremented by 1 so that
        //    when "k" meets the breaking condition, "j" will be
        //    the actual value of exp[leftIdx]
        for (let j = 0, k = 0; k <= leftIdx; k += count[j], j++) {
            left = j;
        }

        if (leftIdx === rightIdx) { // median on even array length
            median = left;
        } else { // median on odd array length
            // Same as leftIdx
            for (let j = 0, k = 0; k <= rightIdx; k += count[j], j++) {
                right = j;
            }
            median = (left + right) / 2;
        }

        // Compare current value with the median
        // and increment notification count if necessary
        if (exp[i] >= 2 * median) {
            notifications += 1;
        }

        // decrement count of the element removed from
        // expenditures
        count[exp[i - d]] -= 1;
        // increment count of the current
        // element (next iteration median calculation)
        count[exp[i]] += 1;
    }
    return notifications;
}

function findMedianFromArray(array, d) {
    console.log('array=', array);
    const sortedArray = array.sort((a, b) => {
        return a - b;
    });

    let index;
    let averageFloor;

    // Even number
    if( d % 2 === 0) {
        averageFloor = Math.floor(d/2);
        // implement it according to the Wikipedia definition.
        return (sortedArray[averageFloor] + sortedArray[averageFloor+1]) / 2;

    } else {
        // Odd number
        return sortedArray[Math.floor(d/2)];
    }



}

////////////////////////////////////////////////////////////////////

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const expenditure = readLine().split(' ').map(expenditureTemp => parseInt(expenditureTemp, 10));

    let result = activityNotifications(expenditure, d);

    ws.write(result + "\n");

    ws.end();
}
