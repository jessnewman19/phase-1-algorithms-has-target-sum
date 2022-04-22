function hasTargetSum(array, target) {
  let seenNumbers = new Set()
  for (number in array) { 
    let complement = target-number
    if (seenNumbers.has(complement)) { 
      seenNumbers.add(number)
      return true
    } else { 
      return false
    }
  } 
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  - The function should return true if any pair of numbers in the array adds up to the target number
  1. Declare a new variable that is initially equal to 0
  2. Write a loop that loops through each element in the array and takes the sum. 
  3. ...I got stuck here
*/

/*
  Add written explanation of your solution here
  1. Sort the array in ascending order
  2. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
