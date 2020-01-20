/*
 * Complete the Rectangle function
 */

function Rectangle(a, b) {
  const rec = new Object();
  rec.length = a;
  rec.width = b;
  rec.perimeter = a + a + b + b;
  rec.area = a * b;
  return rec;
}

const rec = new Rectangle(a, b);

console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);
