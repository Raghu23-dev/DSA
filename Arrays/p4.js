//Find all the missing number
//hint: arr to set (to remove duplicate) and loop through to check the index number is present in set if not add to an array and finally return
//O(n)

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
function allMissingNumber(arr) {
  let n = arr.length;
  let arrSet = new Set(arr);
  let missingNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (!arrSet.has(i)) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}
console.log(allMissingNumber(nums));
