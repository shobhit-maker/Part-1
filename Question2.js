// Array of zeros and ones
var arr = [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0];
// temporary array which stores prefix sum of 'arr' elements.
var preSum = [arr[0]];
// This variable will store number of maximum consecutive ones.
var maxConsecutiveOne = 0;
// Building up prefix sum array and fetting maximum value 
// which will be maximum number of consecutive ones.
for(let i = 1; i < arr.length; i++) {
    if(arr[i] != 0) {
        preSum[i] = preSum[i-1]+arr[i];
    }
    else {
        preSum[i] = 0;
    }
    if(maxConsecutiveOne < preSum[i]) {
        maxConsecutiveOne = preSum[i];
    }
}
console.log(maxConsecutiveOne);