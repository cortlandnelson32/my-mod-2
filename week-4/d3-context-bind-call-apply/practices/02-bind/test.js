// Your code here
const Employee = require('./employee')

const john = new Employee(
  "John Wick",
  "Dog Lover"
)

setTimeout(() => {
  john.sayName()
}, 2000)

setTimeout(() => {
  john.sayOccupation()
}, 3000)
