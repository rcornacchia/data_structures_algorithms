const arr = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];

const findMaxSubarray = (a, low, high) => {
  console.log(`finding max subarray with high: ${high}, and low: ${low}`);
  if (high == low) {
    return [low, high, a[low]]; // base case
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
  console.log(`finding max crossing subarray with high: ${high}, and low: ${low}`);

  let maxLeft,
      maxRight,
      leftSum = -1000000,
      rightSum = -1000000,
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

console.log(findMaxSubarray(arr, 0, arr.length));