//Duplicate Values
//We can check whether the length of given array is equal to the Set of the array, because Set truncates the duplicate values.

//Less verbose Approach
//O(N)
const nums1 = [1, 2, 3, 1];
function containsDuplicate1(arr) {
  return arr.length !== new Set(arr).size;
}
console.log(containsDuplicate1(nums1));

//Nested loops Approach for understanding
//O(N^2)
const nums2 = [1, 2, 3, 4, 5, 1];
function containsDuplicate2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(containsDuplicate2(nums2));

//Best Approach
//O(N)
const nums3 = [1, 2, 3, 4, 1];
function containsDuplicate3(arr) {
  const arrSet = new Set();
  for (let num of arr) {
    if (arrSet.has(num)) return true;
    arrSet.add(num);
  }
  return false;
}
console.log(containsDuplicate3(nums3));
