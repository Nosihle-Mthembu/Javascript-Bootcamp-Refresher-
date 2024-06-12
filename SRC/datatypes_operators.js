console.log("Data Type Operators")
console.log('Exercise 1: Numbers')
// Data Types Operations
// Exercise 1: Numbers
// 1. Declare a number variable and assign it a value.
let num = 24

// 2. Declare a number variable and assign it a floating number.
let numFloating = 6.16

// 3. Perform addition, subtraction, multiplication, division, modulus and exponentiation with number variable and another number.
let anotherNum = 4

let addition = num + anotherNum
let subtraction = num - anotherNum
let multiply = num * anotherNum
let division = num / anotherNum
let modulus = num % anotherNum
let exponentiation = num ** anotherNum

// 4. Print all your variables.
console.log(addition + ' Addition') 
console.log(subtraction + ' Subtration') 
console.log(multiply + ' Multiplication') 
console.log(division + ' Division') 
console.log(modulus + ' Modulus') 
console.log(exponentiation + ' Exponatiation') 


console.log('Exercise 2: Boolean and Operators')
// Exercise 2: Boolean and Operators
// 1. Use comparison operators to compare two numbers and store the results in boolean variables.
let isGreaterThan = 10 > 5
let isLessThan = 10 < 5

console.log(typeof isGreaterThan + ' is Greater than.')
console.log(typeof isLessThan + ' is Less than.')

// 2. Declare two variables x and y with the values 8 and 12 respectively.
// Use comparison operators to check and print the following:
// • If x is greater than y.
// • If x is less than or equalto y.
// • If x is equalto y.
// • If x is not equalto y.
let x = 8
let y = 12

let isGreater = x > y
let isLess = x <= y
let isEqual = x == y
let isNotEqual = x != y

console.log('Is greater than Y? ' + isGreater)
console.log('Is less than Y? ' + isLess)
console.log('Is equal to Y? ' + isEqual)
console.log('Is not equal to y? ' + isNotEqual)

// 3. Declare the variables a and b with values true and false, determine and print the result of the following logical operations:
// • a AND b
// • a OR b
// • NOT a
let a = true
let b = false

console.log(a && b + ' AND')
console.log(a || b + ' OR')
console.log(!a + ' NOT a')

// 4. Declare variable p and assign it a value of 10. Use the following assignment operators to modify the value of p with any number and print the result each time:
// • +=
// • -=
// • *=
// • /=
// • %=
let p = 10
p += 2
console.log(p + " +=")

p -= 5
console.log(p + " -=")

p *= 3
console.log(p + " *=")

p /= 4
console.log(p + " /=")

p %= 2
console.log(p + " %=")