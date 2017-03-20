const array = [5, 3, 2, 1, 4];

// if array has < 2 elements, return array
// else divide array in half and recurse

function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }
        const mid = Math.floor(array.length/2);
        const first = array.slice(0, mid);
        const second = array.slice(mid);

        // console.log(first);
        // console.log(second);
        // mergeSort(first);
        // mergeSort(second);
        console.log(array);
        return merge(mergeSort(first), mergeSort(second));
}

function merge(a1, a2) {
    // console.log("Array 1: " + a1);
    // console.log("Array 2: " + a2);
    const merged = [];
    while (a1.length && a2.length) {
        let num;
        if (a1[0] > a2[0]) {
            num = a2.shift();
        } else {
            num = a1.shift();
        }
        merged.push(num);
        // console.log(merged);
    }
    if (a1.length && !a2.length) merged.push(...a1);
    if (a2.length && !a1.length) merged.push(...a2);
    // console.log(merged);
    // console.log();
    return merged;
}

console.log(mergeSort(array));