// Returns a new array of elements.
// Calls back each element, index and returns each in turn.
// Takes a callback that runs.
// Used for filtering out an array of elements by a specific condition.

const elements = ["earth", "wind", "fire", "water"];

const elementIsWater = elements.filter(element => {
  return element == "water"
});

console.log(elementIsWater);