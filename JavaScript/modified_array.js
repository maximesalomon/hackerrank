/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */

const modifyArray = nums => {
  const modifiedNums = [];
  nums.map(num => {
    if (num % 2 == 0) {
      num = num * 2;
    } else {
      num = num * 3;
    }
    return modifiedNums.push(num);
  });
  return modifiedNums;
};

const arrOfNums = [1, 2, 3, 4, 5];

console.log(modifyArray(arrOfNums));
