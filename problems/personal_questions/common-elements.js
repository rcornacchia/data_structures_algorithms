// given two sorted arrays, return common elements in 
// constant time and constant time complexity

function findCommon(a1, a2) {
    let i = j = 0;
    let first = a1[i];
    let second = a2[j];
    const shared = [];

    while (first != undefined && second != undefined) {
        if (first == second) {
            shared.push(first);
            i = i + 1;
            j = j + 1;
        } else if (first < second) {
            i = i + 1;
        }
        else {
            j = j + 1;
        }
        first = a1[i];
        second = a2[j];
    }
    return shared;
}

const one = [1, 2, 5, 6];
const two = [0, 1, 4, 6];

shared = findCommon(one, two);
console.log(shared);
