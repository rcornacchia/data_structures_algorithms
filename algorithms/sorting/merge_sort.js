const array = [5, 3, 2, 1, 5];

// divide array in half
function mergeSort(array) {
    const mid = Math.floor(array.length / 2);
    if (mid < array.length) {
        const first = array.slice(0, mid);
        const second = array.slice(mid, array.length);
        mergeSort(first);
        mergeSort(second);
        return merge(first, second);
    }
}

function merge(arr1, arr2) {
    if (arr1 > arr2) return [...arr1, ...arr2];
    else return [...arr2, ...arr1];
}

console.log(mergeSort(array));