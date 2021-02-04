// ------------------------------ PROBLEM SOLVING APPROACHES
// what is an algorithm? -> a process or set of steps to accomplish a certain task
// ex: mathematical steps, facebooks algo that displays specific ads to you, search result algorithims

// 1. UNDERSTAND THE PROBLEM
// write a function which takes two inputs and returns their sum.

// can I restate the problem in my own words?
// implement addition

// what are the inputs that go into the problem?
// ints, floats, string, large numbers?

// what are the outputs that should come out from the solution of the problem
// ints, floats, string, large numbers?

// can the outputs be determined from the inputs? do I have enough info to solve the problem?

// how should I label the important pieces of data that are a part of the problem?

// 2. CONCRETE EXAMPLES
// come up with concrete examples. examples provide sanity checks. user stories, unit tests.
// start with simple examples, progress to more complex examples

// write a function which takes in a string and returns counts of each character in the string.

// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h: 1, e:1, l:2, o:1}

// do numbers matter/count? spaces? how are lowercase/uppercase handled? empty input?

// 3. BREAK IT DOWN
// doesn't have to be full psuedocode, just comment out, communicate what you're doing

// "Your PIN number is 1234!"

// function charCount(str) {
//   // make object to return at end
//   const strObj = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowercase;
//     if (strObj[char] > 0) {
//       strObj[char]++;
//     } else {
//       strObj[char] = 1;
//     }
//   }
//   return strObj;
//   // loop over string, for each character
//     // if the char is a number/letter and key in object, add 1 to count
//     // if the char is a number/letter and not in object, add it and set value to 1
//     // if char is something else, don't do anything
//   // return object at end
// }

// console.log(charCount('Your PIN number is 1234!'));



// 4. SOLVE OR SIMPLIFY
// solve if you can - if you can't solve something a little simpler but still relevant to entire problem

// 5. LOOK BACK AND REFACTOR9
// refactoring questions:
// can you check the result? can you derice the result differently? can you understand at a glance? can you use the result or method for some other problem? can you improve the performance of your solution? can you think of other ways to refactor? how have other people solved this problem?

// TO CHECK FOR ALPHA NUMERIC CHARACTERS USING REGEXP
// if (/[a-z0-9]/.test(char)) {
  // logic goes here
// }

// function charCount(str) {
//   const strObj = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (strObj[char] > 0) {
//         strObj[char]++;
//       } else {
//         strObj[char] = 1;
//       }
//     }
//   }
//   return strObj;
// }

const charCount = (str) => {
  const strObj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      strObj[char] = ++strObj[char] || 1;
    }
  }
  return strObj;
}



console.log(charCount('Demetri'));