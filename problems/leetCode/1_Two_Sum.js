// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// calculate complement
// if complement is in the map, return the indices
// else push index and value onto map
const twoSum = (nums, target) => {
    const numbers = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = Number(target - nums[i]);
            if (numbers[complement] != undefined) return [numbers[complement], i];
        else numbers[nums[i]] = i;
    }
    return -1;
}

const result = twoSum([1, 2, 3, 4], 3);
console.log(result);
