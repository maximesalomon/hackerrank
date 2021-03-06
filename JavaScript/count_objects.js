/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */

const getCount = objects => {
  let count = 0;
  objects.map(o => {
    if (o.x === o.y) {
      ++count;
    }
  });
  return count;
};

const arrOfObjects = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 }
];

console.log(getCount(arrOfObjects));
