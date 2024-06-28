/** product: calculate the product of an array of numbers. */

function product(nums) {
  // Base Case
  if (nums.length === 0) return 1;

  // Normal Case
  return nums[0] * product(nums.slice(1));
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base Case
  if (words.length === 1) return words[0].length;

  // Normal Case
  if (words[1].length > words[0].length) {
    return longest(words.slice(1));
  }
  else {
    words.splice(1, 1);
    return longest(words);
  }
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // Base Case
  if (str.length === 0) return '';

  // Normal Case
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base Case
  if (str.length === 0 || str.length === 1) return true;

  // Normal Case
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  else {
    return false
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // Base Case
  if (arr.length === 0) return -1;
  else if (arr[0] === val) return 0;
    
  
  // Normal Case - In the case that the value is not found, the below return works because at each recursive step, the function "findIndex" will either return 1 + findIndex or -1. 
  // At the last step, the 1 + findIndex([], val) will equate to 0. At this step, since 0 is considered to be a falsy value, -1 is returned at this step.
  // Following that, at each intermediate recursive step, the function will return 1 + (-1) || -1, resulting in -1 being returned at each step. 
  // This means that the final step, 1 + (-1) || -1, will return -1.
  return 1 + findIndex(arr.slice(1), val) || -1; 
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base Case
  if (str === '') return '';

  // Normal Case
  let newStr = str.slice(0, -1)
  return str.slice(-1) + revString(newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arrStrings = [];

  for (let key in obj) {
    // Base Case
    if (typeof obj[key] === 'string') {
      arrStrings.push(obj[key]);
    }
    // Normal Case
    else if (typeof obj[key] === 'object') {
      arrStrings.push(...gatherStrings(obj[key]));
    }
  }
  return arrStrings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  // Base Case
  if (left > right) return -1;

  // Normal Case
  let mid = Math.floor((left + right) / 2);
  if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, right);
  }
  else if (arr[mid] === val) {
    return mid;
  }
  else {
    return binarySearch(arr, val, left, mid - 1);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
