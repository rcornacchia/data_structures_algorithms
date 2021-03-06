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
            // take from nums2
            const x = nums2.shift();
            arr.push(x);
        } else {
            // take from nums1
            const x = nums1.shift();
            arr.push(x);
        }
    }
    console.log(arr);

    // return halfway point of array
    if (arr.length % 2 != 0) return arr[parseInt(arr.length/2)];
    else return ((arr[parseInt(arr.length/2)] + arr[parseInt(arr.length/2) - 1])/2);
};

const result = findMedianSortedArrays([1, 2, 5], [3,4, 7]);
console.log(result);
