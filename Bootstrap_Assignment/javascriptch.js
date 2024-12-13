// String Manipulation Functions

// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Count Characters
  function countCharacters(str) {
    return str.length;
  }
  
  // Capitalize Words
  function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
  }
  
  // Array Functions
  
  // Find Maximum and Minimum
  function findMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
  }
  
  // Sum of Array
  function sumOfArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Filter Array
  function filterArray(arr, condition) {
    return arr.filter(condition);
  }
  
  // Mathematical Functions
  
  // Factorial
  function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  // Prime Number Check
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  
  // Fibonacci Sequence
  function generateFibonacci(n) {
    const fib = [0, 1];
    while (fib.length < n) {
      fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    }
    return fib;
  }
  