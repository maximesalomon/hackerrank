const elements = ["earth", "wind", "fire", "water"];

const newElements = elements.map((element, idx) => {
  return `${element} ${idx}`;
});

console.log(newElements);
console.log(elements);

// Return a new array
