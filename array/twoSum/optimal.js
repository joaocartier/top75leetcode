/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in map) {
      res.push(i);
      res.push(map[target - nums[i]]);
    }
    map[nums[i]] = i;
  }

  return res;
};
