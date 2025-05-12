function merge(left, right) {
  let result = [], i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function parallelMergeSort(arr) {
  if (arr.length <= 1) return Promise.resolve(arr);

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return Promise.all([parallelMergeSort(left), parallelMergeSort(right)])
    .then(([sortedLeft, sortedRight]) => merge(sortedLeft, sortedRight));
}
