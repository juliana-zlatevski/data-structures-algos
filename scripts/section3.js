// ------------------------------ BUILT IN DATA STRUCTURES
// OBJECTS
// WHEN TO USE
// when you need fast access/insertion and removal
// when you don't need order
// insertion, removal, access -> O(1)
// searching -> O(n)

// ARRAYS
// WHEN TO USE
// when you need order
// when you need fast access (kinda)
// insertion & removal -> time complexity depends based on where adding/removing from
// searching -> O(n)
// access -> O(1)
// pushing (adding to end) is O(1)
// unshift (inserting at beginning) is O(n) (because you have to do something roughly once for each element)
// shift (removing from beginning) is O(n) (because you again have to do something roughly once for each element)
// best to avoid shift and unshift if possible - push and pop always faster and more efficient

// built in array methods and their complexities
// push O(1)
// pop O(1)
// shift O(n)
// unshift O(n)
// concat O(n)
// slice O(n)
// splice O(n)
// sort O(n * log n)
// forEach/map/filter/reduce O(n)