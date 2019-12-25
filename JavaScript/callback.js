const elements = ["earth", "wind", "fire", "water"];

const showFirst = (arr, cb) => {
  cb(arr[0]);
};

showFirst(elements, firstItem => {
  console.log(firstItem);
});

//////////////////////

const showLength = (arr, cb) => {
  cb(arr.length);
};

showLength(elements, lengthOfList => {
  console.log(lengthOfList);
});

//////////////////////

elements.forEach((element, idx) => {
  console.log(element, idx);
});

//////////////////////

const newElements = elements.map((element, idx) => {
  return `${element} ${idx}`;
});

console.log(newElements);
console.log(elements);
