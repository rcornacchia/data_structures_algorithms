function insertionSort(arr) {
    for (let i=1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0  && arr[j] > key) {
            console.log(arr);
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j+1] = key;
    }
    console.log(arr);
}

console.log(insertionSort([5, 3, 4, 6, 1, 2]));
