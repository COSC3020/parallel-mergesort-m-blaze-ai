const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

(async function runTests() {
  const arrays = [
    [],
    [5],
    [3, 1, 2],
    [9, 4, 7, 1, 5, 3, 8, 2, 6],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000)),
  ];

  function deepEqual(a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
  }

  for (let arr of arrays) {
    let input = [...arr];
    let sorted = await parallelMergeSort(arr);
    let expected = input.sort((a, b) => a - b);
    
    if(!deepEqual(sorted, expected)) {
        throw new Error("Test failed.");
    }
  }

  console.log("All tests passed.");
})();
