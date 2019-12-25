const elements = ['earth', 'wind', 'fire', 'water']

const showFirst = (arr, cb) => {
    cb(arr[0]);
}

showFirst(elements, (firstItem) => {
    console.log(firstItem);
})

//////////////////////

const showLength = (arr, cb) => {
    cb(arr.length);
}

showLength(elements, (lengthOfList) => {
    console.log(lengthOfList)
})