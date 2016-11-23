var findMedianSortedArrays = function(nums1, nums2) {
    var counter1 = 0, counter2 = 0;
    var nums = [], result;
    while(nums1.length !== 0 || nums2.length !== 0) {
        var x = nums1[0] || 0;
        var y = nums2[0] || 0;
        if (x < y && nums1.length !== 0) {
            if (x !== 0) nums.push(x);
            nums1.shift();
        } else {
            if(y !== 0) nums.push(y);
            nums2.shift();
        }
    }
    var halfway = parseInt(nums.length / 2);
    if (nums.length % 2 !== 0) {
        result = nums[halfway];
    } else {
        result = (nums[halfway - 1] + nums[halfway]) / 2;
    }

    return result;
};

findMedianSortedArrays([1, 2], [3,4]);
