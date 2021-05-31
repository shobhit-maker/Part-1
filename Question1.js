// Creating an array of random integers in range 1-100
var nums = [];
for(let i = 0; i < 10; i++) {
    nums[i] = Math.floor(Math.random()*100+1);
}
// Iterating array to get all even numbers.
for(let i = 0; i < nums.length; i++) {
    if(nums[i]%2 == 0) {
        console.log(nums[i]);
    }
}