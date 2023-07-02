// Algorithm

// To determine if an integer is a palindrome, we can follow the following algorithm:

// If the given integer is negative, it cannot be a palindrome since the '-' sign will be reversed.
// If the given integer is a single digit number (0-9), it is a palindrome since it reads the same forwards and backwards.
// If the last digit of the integer is 0, it cannot be a palindrome since no non-zero number starts with 0.
// Reverse the given integer while keeping track of the reversed number.
// Compare the reversed number with the original number.
// If they are equal, the integer is a palindrome. Otherwise, it is not.

let isPalindrome = function(x) {
    // Step 1: Check for negative numbers
    if (x < 0) {
      return false;
    }
    
    // Step 2: Single digit number is always a palindrome
    if (x < 10) {
      return true;
    }
    
    // Step 3: Check for numbers ending with 0
    if (x % 10 === 0) {
      return false;
    }
    
    let reversed = 0;
    let original = x;
    
    // Step 4: Reverse the integer
    while (x > 0) {
      const lastDigit = x % 10;
      reversed = (reversed * 10) + lastDigit;
      x = Math.floor(x / 10);
    }
    
    // Step 5: Compare reversed with original
    // Step 6: Check if it's a palindrome
    return reversed === original;
  };
  