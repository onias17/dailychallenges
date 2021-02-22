// February 21, 2021

// Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight)

const hammingWeight = function(n) {
  let digits = n.toString(2).split("")
  let binaryCount = 0;
  console.log(digits)
  for (let i = 0; i <= digits.length; i++) {
    if (parseInt(digits[i]) === 1) {
      binaryCount++
      console.log(binaryCount)
    }
  }
  return binaryCount
};

// hammingWeight(101)
// hammingWeight(010000000001)
hammingWeight(00000000000000000000000000001011)