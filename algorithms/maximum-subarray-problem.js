const arr = [1, 3, 2, 9, 3, 5, 4];

const findMaxSubarray = (a, low, high) => {
  console.log(high);

  if (high == low) {
    return (low, high, a[low]); // base case
  } else {
    const mid = Math.floor((low+high)/2);
    [leftLow, leftHigh, leftSum] = findMaxSubarray(a, low, mid);
    [rightLow, rightHigh, rightSum] = findMaxSubarray(a, mid+1, high);
    [crossLow, crossHigh, crossSum] = findMaxCrossingSubarray(a, low, mid, high);

    if (leftSum >= rightSum && leftSum >= crossSum) return [leftLow, leftHigh, leftSum];
    if (rightSum >= leftSum && rightSum >= crossSum) return [rightLow, rightHigh, rightSum];
    else return [crossLow, crossHigh, crossSum];
  }
}

const findMaxCrossingSubarray = (a, low, mid, high) => {
  let maxLeft = 0,
      maxRight = 0,
      leftSum = -100,
      sum = 0;

  for (let i = mid; i > low; i--) {
    sum = sum + a[i];
    if (sum > leftSum) {
      leftSum = sum;
      maxLeft = i;
    }
  }

  for (let j = mid + 1; j < high; j++) {
    sum = sum + a[j];
    if (sum > rightSum) {
      rightSum = sum;
      maxRight = j;
    }
  }
  return [maxLeft, maxRight, leftSum + rightSum];
}

console.log(findMaxSubarray(arr, 0, arr.length-1));