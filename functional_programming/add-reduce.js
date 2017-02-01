function addReduce(nums) {
    if (nums.length == 1) return nums[0];
    return nums.pop() + addReduce(nums);
}

const result = addReduce([1, 2, 3]);
console.log(result);
