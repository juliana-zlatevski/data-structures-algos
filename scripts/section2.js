// ------------------------------- TIME COMPLEXITY
// write a function that calcs sum of all numbers from 1 up to and including some number n

// SOLUTION 1 -> number of operations is dependent on n ex: 5n + 2
// O(n)
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// SOLUTION 2 -> number of operations is 3 regardless of what value of n is
// O(1)
function addUpTo(n) {
  return n * (n + 1) / 2;
}

console.log(addUpTo(1000000000));

// the problem with time:
// different machines will record different times for same function
// the same machine will record different times for same function as well
// for fast algos, speed measurements are not precise enough
// rather than time, count the ~number~ of simple operations the computer has to perform
// nested loops -> O(n * n) or O(n^2)

// O(2n) == O(n)
// O(500) == 0(1)
// O(13n^2) == O(n^2)
// O(n + 10) == O(n)
// O(1000n + 50) == O(n)
// O(n^2 + 5n + 8) == O(n^2)

// Arithmetic operations are constant
// Variable assignment is constant
// Accessing elements in an array (by index) or object (by key) is constant
// In a loop, the complexity if the length of the loop times the complexity of what happens inside of the loop

// quiz 1
// 1. simplify O(n + 10) = O(n)
// 2. simplify O(100 * n) = O(n)
// 3. simplify O(25) = O(1)
// 4. simplify O(n^2 + n^3) = O(n^3)
// 5. simplify O(n + n + n + n) = O(n)

// quiz 2
// 1. determine time complexity of following:
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
      console.log(i);
  }
}
// O(n)

// 2. determine time complexity of following:
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
  }
}
// O(1)

// 3. determine time complexity of following:
function logAtLeast10(n) {
  for (var i = 1; i <= Math.max(n, 10); i++) {
      console.log(i);
  }
}
// O(n)

// 4. determine time complexity of following:
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
          newArray[i / 2] = array[i];
      }
  }
  return newArray;
}
// O(n)

// 5. determine time complexity of following:
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
      var subtotal = 0;
      for (var j = 0; j <= i; j++) {
          subtotal += array[j];
      }
      subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
// O(n^2)

// ------------------------------- SPACE COMPLEXITY
// focusing on what happens inside of the algo
// most primitives are constant space
// strings require O(n) space (where n is the string length)
// reference types require O(n) space

// quiz 
// 1. determine space complexity of following:
function logUpTo(n) {
  for (var i = 1; i <= n; i++) {
      console.log(i);
  }
}
// O(1)

// 2. determine space complexity of following:
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
  }
}
// O(1)

// 3. determine space complexity of following:
function logAtMost10(n) {
  for (var i = 1; i <= Math.min(n, 10); i++) {
      console.log(i);
  }
}
// O(1)

// 4. determine space complexity of following:
function onlyElementsAtEvenIndex(array) {
  var newArray = Array(Math.ceil(array.length / 2));
  for (var i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
          newArray[i / 2] = array[i];
      }
  }
  return newArray;
}
// O(n)

// 5. determine space complexity of following:
function subtotals(array) {
  var subtotalArray = Array(array.length);
  for (var i = 0; i < array.length; i++) {
      var subtotal = 0;
      for (var j = 0; j <= i; j++) {
          subtotal += array[j];
      }
      subtotalArray[i] = subtotal;
  }
  return subtotalArray;
}
// O(n)

// ------------------------------- LOGS AND SECTION RECAP NOTES
// logarithm is the inverse of exponentiation
// log base2 (8) = 3 || 2^3 = 8
// log base 2 (value) = exponent

// searching, sorting and recursion algos involve logarithms

// to analyze the performance of an algo, we use Big O
// big O doesn't care about precision, just general trends (linear, quadratic, constant)
// time or space complexity depends only on the algo, not the hardware used to run the algo