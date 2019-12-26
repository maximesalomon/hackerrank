// Returns a new array of elements.
// Takes a callback which is a reducer function.
// Reducer function takes a previous value and a next value, known as an accumulator and currentValue.
// Used for manipulating or reshaping data into a single value.

const elements = ["earth", "wind", "fire", "water"];

const reducer = (allElements, element) => {
    return allElements += element;
}

const reduceElements = elements.reduce(reducer, []);

console.log(reduceElements);