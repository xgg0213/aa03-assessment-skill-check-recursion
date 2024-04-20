/***********************************************************************
**PROBLEM 1: findDuplicatesIterative (1 point)**
Write a function `findDuplicatesIterative`. The function should take an
inputArray (array) and return an array including all items from the inputArray
that appear more than once. However, the returned array must NOT have any
duplicates within it.

For example:

findDuplicatesIterative([ 5, 8, 8, 2, 3 ]);
// [ 8 ]
findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]);
// [ 8, 3 ] (only one 8; order of elements does not matter)
findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ]);
// [ 'word', 'a' ] (order of elements does not matter)

A successful solution will pass the first mocha test.

**PROBLEM 2: findDuplicatesRecursive (1 point)**
Write a function `findDuplicatesRecursive`. The function should have the same
output as the first function, but MUST use recursion WITH a default parameter
to find the duplicates.

A successful solution will pass the second mocha test.

**PROBLEM 3: findDuplicatesNoDefault (1 point)**
Write a function `findDuplicatesNoDefault`. The function should have the same
output as the first two functions, but MUST use recursion to find the duplicates.
In addition, you MAY NOT use any default parameters in your solution. You should
only use a single parameter, the inputArray.

A successful solution will pass the third mocha test.

**PROBLEM 4: findDuplicatesChallenge (1 point)**
Write a function `findDuplicatesChallenge`. This function must use recursion,
similar to the second and third function. To pass the fourth mocha test, the
solution code must meet the following constraints:

- There must be NO loop within the function
  - You may NOT use FOR or WHILE loops
- There must be NO array looping methods
  - You may NOT use .map, .forEach, .filter, .find, .sort, or .includes

***********************************************************************/

/* PROBLEM 1. findDuplicatesIterative: Must solve with iteration, not recursion */

// Your code here 

// Option 1: using for loop with object construction
// const findDuplicatesIterative = (arr) => {
//   let obj = {};
//   let res = [];

//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     if (obj[el]) {
//       obj[el]++;
//       if (obj[el] === 2) res.push(el);
//     } else  obj[el] = 1
//   }
//   return res;
//   // console.log(res);
// }

// Option 2: using for loop with array.slice;
function findDuplicatesIterative(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (((arr.slice(0,i).concat(arr.slice(i+1))).includes(arr[i])) && !res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
  // console.log(res);
}

/* PROBLEM 2. findDuplicatesRecursive: Must solve with recursion */

// Your code here 

// option 1: with 2 default parameters;
// function findDuplicatesRecursive (arr,res=[], obj={}) {
//   // 1. base case
//   if (arr.length === 0) {
 
//     return res;
//   }

//   // 2. recursion
//   else {
//     let el = arr.pop();

//     if (obj[el]) {
//       obj[el]++;
//       if (obj[el] === 2) res.push(el);
//     } else obj[el] = 1;

//     return findDuplicatesRecursive(arr,res,obj); 
//     // what's the difference of having return here or not: 
//     // answer: no difference, as it's just mutating the array, not calling for stacks
//   }

// }


// option 2: with 1 default parameter with res = {};
// const findDuplicatesRecursive = (arr, res={}) => {
//   if (arr.length === 0) return [];

//   let el = arr.pop();
//   if (res[el] === undefined) res[el] = 1;
//   else res[el] += 1;

//   if (res[el] === 2) return [el].concat(findDuplicatesRecursive(arr, res));
//   else return [].concat(findDuplicatesRecursive(arr, res));

// }



/* PROBLEM 3. findDuplicatesNoDefault: Must use recursion with no default parameters */

// Your code here 
function findDuplicatesNoDefault(arr) {
  // 1. base case
  if (arr.length === 0) return [];

  let el = arr.shift();
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (el === arr[i]) count++;
  }

  if (count === 1) return [el].concat(findDuplicatesNoDefault(arr));
  else return [].concat(findDuplicatesNoDefault(arr));

}


/* PROBLEM 4. findDuplicatesChallenge: No for/while loops OR array looping methods */
// can use default parameters

// Your code here 
const findDuplicatesChallenge = (arr, res={}, final=[]) => {
    // option 1: with 1 parameter: findDuplicatesChallenge will have arr and res only
    // if (arr.length === 0) return []; // if simply putting down return, it's sending undefined to the next function, adding 'undefined' to the array

    // let el = arr.pop();
    // if (res[el] === undefined) res[el] = 1;
    // else res[el] += 1;

    // if (res[el] === 2) return [el].concat(findDuplicatesChallenge(arr, res));
    // else return [].concat(findDuplicatesChallenge(arr, res));

    // option 2: with 2 parameters as is in line 146
    if (arr.length === 0) return final;

    let el = arr.pop();
    if (res[el] === undefined) res[el] = 1;
    else res[el] += 1;

    if (res[el] === 2) {
      final.push(el);
      return findDuplicatesChallenge(arr, res, final); // if 'return' is omitted, the callstack will be undefined, making the final result undefined
    } else return findDuplicatesChallenge(arr, res, final);
}


/*
LOCAL TESTS: Run `node problems/find-duplicates.js` to run this node file,
and debug your code using console.logs.

MOCHA TESTS: Run `mocha` to run the mocha tests.
*/

// console.log(findDuplicatesIterative([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)

// console.log(findDuplicatesRecursive([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesRecursive([ 5, 8, 8, 8, 2, 3, 3 ]));
// [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesRecursive([ 'a', 'word', 'a', 'another', 'word' ]));
// [ 'word', 'a' ] (order of elements does not matter)

// console.log(findDuplicatesNoDefault([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesNoDefault([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesNoDefault([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)


console.log(findDuplicatesChallenge([ 5, 8, 8, 2, 3 ]));
// [ 8 ]
console.log(findDuplicatesChallenge([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesChallenge([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)
