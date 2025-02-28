//Two Sum

//Ineffecient Solution - Nested Loops
//O(N^2)
let nums = [2, 7, 11, 15];
let target = 9;
function twoSum1(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
console.log(twoSum1(nums, target));

//Best Solution
//O(N)
//Using Hash Map
/**
 * Create empty map
 * loop through array
 * complement=target-arr[i]
 * if map has complement > return map.get(complement) and i
 * map.set(nums[i],i)
 * return []
 */

function twoSum2(array, target) {
  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
console.log(twoSum2(nums, target));
