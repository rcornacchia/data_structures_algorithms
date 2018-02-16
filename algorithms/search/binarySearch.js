const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const binarySearch = (arr, key) => {
    // search at the halfway mark of the array
    let index = Math.floor(arr.length / 2)

    console.log(`Key: ${key}`)
    console.log(arr)
    console.log(index)
    if (index == 0) return -1
    let mid = arr[index]
    console.log(mid)
    console.log()
    if (mid == key) return index
    if (mid > key) return binarySearch(arr.slice(0, mid), key)
    if (mid < key) return binarySearch(arr.slice(mid), key)
    console.log('test')
    // if the middle element is equal, return it
    // if the middle element is greater than the key, look to the left
    // if the middle element is less than the key, look to the right 
}

console.log(binarySearch(arr, 8));