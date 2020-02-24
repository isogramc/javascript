function solution(A) {
    // first find max value in the given array
    var final_value;

    // sort array A, count through the given numbers from min to max; add missing numbers in sequence to a new array 
    var missing = findMissingNumbers(A);

    // find the lowest missing integer (if there were numbers missing)
    if (missing.length !== 0){
        var min = Math.min.apply(null, missing);
        final_value = min;
    } else {
        // just take the last number in the sequence and add 1
        var max = Math.max.apply(null, A);
        final_value = max+1;
    }

    // something strange here - no negative numbers or zero allowed so just set next available number to 1
    if(final_value===0 || final_value<0){
        final_value=1;
    }

    return final_value;

}

function findMissingNumbers(arr) {

    var missingNumbersCount;
    var missingNumbers = [];

    arr.sort(function(a, b) {
        return a - b;
    });

    for(var i = 0; i < arr.length; i++) {
        if(arr[i+1] - arr[i] !== 1 && arr[i+1] !== undefined) {
            missingNumbersCount = arr[i+1] - arr[i] - 1;
            for(var j = 1; j <= missingNumbersCount; j++) {
                missingNumbers.push(arr[i] + j)
            }
        }
    }
    return missingNumbers
}
