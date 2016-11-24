const findMedianSortedArrays = (nums1, nums2) => {
    // create one sorted array
    const arr = [];
    while (nums1.length != 0 || nums2.length != 0) {
        if (nums1.length == 0) {
            arr.push(...nums2);
            nums2 = [];
        }
        else if (nums2.length == 0) {
            arr.push(...nums1);
            nums1 = [];
        }
        else if (nums1[0] > nums2[0]) {
            // take from b
            const x = nums2.shift();
            arr.push(x);
        } else {
            // take from a
            const x = nums1.shift();
            arr.push(x);
        }
    }
    console.log(arr);

    // return halfway point of array
    if (arr.length % 2 == 0) return arr[parseInt(arr.length/2)];
};

const result = findMedianSortedArrays([1, 2, 5], [3,4, 7, 8]);
console.log(result);
