// 1.
function sum(array) {
  try {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } catch (error) {
    if (error instanceof TypeError)
    console.error(error.message)
  }
}

let res = sum(null);
console.log(res);

// 2.

// tests
sayName("Alex");
sayName(1);
// Your code here
function sayName(name){
  try {
    if (typeof name != "string")
      throw new Error("Invalid name! Must be a string!")
    console.log(name)
  } catch (error) {
    console.error(error.message)
  }
}

// // 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet()
} catch (error) {
  console.log("hello world")
}
