/**
 * @param {number[]} nums
 * @return {number}
 *
 * See Kadane's algorithm
 * - https://en.wikipedia.org/wiki/Maximum_subarray_problem#Empty_subarrays_admitted
 */
var maxSubArray = function (nums) {
  let bestSum = 0;
  let currentSum = 0;

  if (nums.length === 1) return nums[0];

  let highest = 10 * 10 * 10 * 10 * -1 - 1;

  for (let n of nums) {
    if (n > highest) {
      highest = n;
    }
  }

  if (highest < 0) return highest;

  for (let n of nums) {
    currentSum = Math.max(0, currentSum + n);
    bestSum = Math.max(bestSum, currentSum);
  }

  return bestSum;
};
