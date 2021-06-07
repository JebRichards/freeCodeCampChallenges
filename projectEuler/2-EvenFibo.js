function fiboEvenSum(n) {
  // By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms.
  let start = 3;
  let minusOne = 2;
  let minusTwo = 1;
  let sum = 2;

  while (start < n) {
    if (start % 2 === 0) {
      sum += start;
    }

    minusTwo = minusOne;
    minusOne = start;
    start = minusOne + minusTwo;
  }

  return sum;
}

console.log(fiboEvenSum(10)); //Returns 10

//console.log(fiboEvenSum(60)); //Returns 44
