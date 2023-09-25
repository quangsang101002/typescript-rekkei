function Palindrome(nums: String): boolean {
  const replaced = nums.toLowerCase().replace(/[ :,]/g, '');
  console.log(replaced);

  let left = 0;
  let right = replaced.length - 1;

  while (left < right) {
    if (replaced[left] != replaced[right]) {
      return false;
    }
    right--;
    left++;
  }

  return true;
}
const ss = 'race a car';
Palindrome(ss);
console.log(Palindrome(ss));
