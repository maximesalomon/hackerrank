const elements = ["earth", "wind", "fire", "water"];

const newElements = elements.map((element, idx) => {
  return `${element} ${idx}`;
});

console.log(newElements);
console.log(elements);

// Returns a new array of elements.
// Calls back each element, index and returns each in turn.
// Used for manipulating or reshaping data.
