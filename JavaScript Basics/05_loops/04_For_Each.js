// Assign array
let Counter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter on array
const newCounter = Counter.filter((item) => {
    return item > 5
})
console.log(newCounter);

// Filter array using foreach loop
anotherCounter = []

Counter.forEach((item) => {
    if (item > 5) {
        anotherCounter.push(item)
    }
})
console.log(anotherCounter);
        
