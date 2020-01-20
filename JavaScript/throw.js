/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */

const isPositive = a => {
  if (a > 0) {
    return "YES";
  }
  if (a === 0) {
    throw Error("Zero Error");
  } else {
    throw Error("Negative Error");
  }
};

console.log(isPositive(7));
console.log(isPositive(0));
console.log(isPositive(-13));
