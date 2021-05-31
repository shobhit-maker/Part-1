// Declaring an array to store integers.
var arr = [];
// Randomaly generate minimum number of array in range 0-100;
var randomInitialNumber = Math.floor(Math.random()*100);
// Building up array with consecutive numbers in ascending order. 
for(let i = 0; i < 101; i++) {
    arr[i] = randomInitialNumber+i;
}
// Generating randomaly an index to make copy of its value.
idx = Math.floor(Math.random()*100);
// Changeing value of idx+1 with value at idx.
arr[idx+1] = arr[idx];
var missing;
// Getting missing number from array.
for(let i = 0; i < 101; i++) {
    if(arr[i] != arr[0]+i) {
        missing = arr[0]+i;
        break;
    }
}
console.log(missing);