function twoSum(nums: number[], target: number): number[] {
  // map that contains <Value,Index> pairs
  let numsMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    // if map contains a key that is equal to the difference between
    // target and nums[i], we found our indices
    if (numsMap.has(target - nums[i])) {
      return [i, numsMap.get(target - nums[i])!];
    }
    numsMap.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
