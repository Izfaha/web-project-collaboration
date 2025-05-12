export const mockChallenges = [
  {
    id: 'challenge-1',
    title: 'Reverse a String',
    description: 'Write a function that reverses a string. The input string is given as an array of characters s.',
    difficulty: 'Easy',
    initialCode: `function reverseString(str) {
  // Write your code here
  return;
}`,
    expectedAnswer: 'return str.split("").reverse().join("");',
    hints: [
      'Try converting the string to an array first',
      'JavaScript has a built-in reverse method for arrays'
    ]
  },
  {
    id: 'challenge-2',
    title: 'Find the Maximum Number',
    description: 'Write a function to find the maximum number in an array of integers.',
    difficulty: 'Easy',
    initialCode: `function findMax(numbers) {
  // Write your code here
  return;
}`,
    expectedAnswer: 'return Math.max(...numbers);',
    hints: [
      'You could use a for loop to iterate through the array',
      'Or use JavaScript\'s built-in Math.max method with the spread operator'
    ]
  },
  {
    id: 'challenge-3',
    title: 'Check for Palindrome',
    description: 'Write a function that checks if a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward, ignoring case, spaces, and punctuation.',
    difficulty: 'Medium',
    initialCode: `function isPalindrome(str) {
  // Write your code here
  return;
}`,
    expectedAnswer: 'return str.toLowerCase().replace(/[^a-z0-9]/g, "") === str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").reverse().join("");',
    hints: [
      'Remember to handle case sensitivity',
      'You might want to remove spaces and punctuation',
      'Compare the processed string with its reverse'
    ]
  }
];
