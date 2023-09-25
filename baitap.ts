function listNums(nums: number[], value: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === value) {
        return [i, j];
      }
    }
  }
  return [];
}
const nums = [3, 2, 4];
const target = 6;
const listNum = listNums(nums, target);
console.log(listNum);
