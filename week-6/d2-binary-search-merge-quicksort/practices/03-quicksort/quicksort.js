function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return [...arr];


  // Pick the first value as the pivot
  let piv = arr[0];

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < piv) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left
  // Recursively sort the right
  left = quicksort(left);
  right = quicksort(right);

  // Return the concatenation of left, pivot, and right in sorted order
  return [...left, piv, ...right];
  

}


module.exports = [quicksort];
