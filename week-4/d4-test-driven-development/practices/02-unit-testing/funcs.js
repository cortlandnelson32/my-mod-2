function isFive(num) {
  // Your code here
  return num == 5 ? true : false
}

function isOdd(number) {
  // Your code here
  if (typeof number === 'string') throw new Error("i am a string");
  if (typeof number === 'object') throw new Error({ i: "am", an: "object" });
  if (typeof number === 'array') throw new Error(["i", "am", "an", "array"]);

  if (number % 2 !== 0){
    return true
  }
  return false
}

function myRange(min, max, step = 1) {
  // Your code here
  let array = [];
  for (let i = min; i <= max; i += step) {
    array.push(i)
  }
  return array    

}


module.exports = { isFive, isOdd, myRange };
