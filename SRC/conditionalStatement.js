console.log('Exercise 1: Temparature Check')
// Exercise 1: Temparature Check
// 1. Write a code using if else statements to check the temperature and print a message based on the following conditions:
// • Ifthe temperature is below 0, print"It's freezing!"
// • Ifthe temperature is between 0 and 15, print"It's cold."
// • Ifthe temperature is between 16 and 25, print"It's mild."
// • Ifthe temperature is above 25, print"It's warm."

let temparature = 20

if(temparature >= 25){
    console.log("It's warm.");
}else if(temparature >= 16){
    console.log("It's mild");
}else if(temparature >= 0){
    console.log("It's cold");
}else{
    console.log("It's freezing.");
}

//2. Switch Statement
let temp = 1

switch(true){
    case temp >= 25 :
        console.log("It's warm.")
        break;
    case temp >= 16 :
        console.log("It's mild.")
        break;
    case temp >= 0 :
        console.log("It's cold.")
        break;
    default:
        console.log("It's freezing.")
        break;
}


//Exercise 2 Divisibility Check
console.log('Exercise 2 Divisibility Check')
// 1. Using if else statements to check if a number is divisible by 2, 3, or both:
// • Ifthe numberis divisible both by 2 and 3, print"Divisible 
// by both."
// • If the number is divisible by only 2, print "Divisible by 2."
// • If the number is divisible by only 3, print "Divisible by 3."
// • If the number is not divisible by either, print "Not 
// divisible by 2 or 3."
let quoNumber = 13

if(quoNumber % 2 === 0 && quoNumber % 3 === 0){
    console.log('Divisible by both')
}else if(quoNumber % 2 === 0){
    console.log('Divisible by 2')
}else if(quoNumber % 3 === 0){
    console.log('Divisible by 3')
}else{
    console.log('Not divisible by 2 or 3')
};

//2. Switch Statement
let both = 6

switch(true){
    case both % 2 === 0 && both % 3 === 0 :
        console.log('Divisible by both')
        break;
    case both % 2 === 0 :
        console.log('Divisible by 2')
        break;
    case both % 3 === 0 :
        console.log('Divisible by 3')
        break;
    default:
        console.log('Not divisible by 2 or 3')
        break;
}

// Exercise 3: For Loops
console.log('Exercise 3: For Loops')
// 1. Print numbers from 1 to 10.
console.log('numbers from 1 to 10.')
for(let i=1; i<=10; i++){
    console.log(i)
};

// 2. Print all even numbers between 1 and 20.
console.log('even numbers between 1 and 20.')
for(let i=1; i<=20; i++){
    if(i % 2===0){
        console.log(i)
    }
};

// 3. Calculate the sum of all numbers from 1 to 100 and print the result.
let tot = 0
for(let i=1; i <= 100; i++){
    tot += i
};
console.log(tot + " sum of all numbers from 1 to 100")

// 4. const numbers = [1, 2, 3, 4, 5]. Given the array of numbers, print each element to the console.
console.log('array of numbers')
const numbers1 = [1,2,3,4,5]
for(let i=0; i< numbers1.length; i++){
    console.log(numbers1[i])
}

//5. const numbers = [3, 7, 2, 5, 10, 6].Given the array of numbers, find and print the largest number.
const anotherNumber = [3,7,2,5,10,6]
let largest = anotherNumber[0]
for(let i=0; i<=numbers1.length; i++){
    if(anotherNumber[i] > largest){
        largest = anotherNumber[i]
    }
}
console.log(largest + " Is the largest")

//Exercise 4: While loops
console.log(' Exercise 4: While loops')
console.log("numbers from 1 to 10.")
// 1. Print numbers from 1 to 10.
let i=1
while(i <=10){
    console.log(i)
    i++
}

// 2. Print all even numbers between 1 and 20.
console.log('even numbers between 1 and 20.')
let e = 1
while(e <=20){
    if(e % 2===0){
        console.log(e)
    }
    e++
}

// 3. Calculate the sum of all numbers from 1 to 100 and print the result.
let total = 0
while(x <= 100){
    total += x;
    x++;
}
console.log(total + " sum of all numbers from 1 to 100")

// 4.  Print all multiples of 5 less than 50.
console.log(" multiples of 5 less than 50.")
let m = 1
while(m <50){
    if(m % 5===0){
        console.log(m)
    }
    m++
}

// Exercise 5: Do while loops
console.log('Exercise 5: Do while loops')
// 1. Print numbers from 1 to 10.
console.log('numbers from 1 to 10.')
let n = 1
do{
    console.log(n)
    n++
}while(n <=10)

// 2. Calculate the sum of all numbers from 1 to 100 and print the result.
let all = 1
do{
    all += a;
    a++;
}while(a <= 100);
console.log(all + " sum of all numbers from 1 to 100 ")  

// 3. Prompt the user to enter a number greater than 10. Keep asking untilthey enter a valid number.

let User = ""
let number;

do{
    number= prompt('Give me any number greater than 10')
if(User = number > 10){
    alert('Good for you. You know comparison operators.')
}else{
    alert("Don't test me.Try again")
}
}while(number <= 10)

// 4.  Create a simple guessing game where the user must guess a number between 1 and 10. The game continues until the user guesses the correct number.
let correctAnswer = 8
let guess;
do{
    guess = prompt('Guess a number I am thinking of between 1 and 10');
    guess = parseInt(guess)
if(guess == correctAnswer){
    alert("Ain't you smart, The correct answer is indeed " + correctAnswer);
}else if(guess >= 9 ){
    alert("You're higher then those two dudes from How High. Try again!");
}else if(guess >= 6){
    alert("Almost there. Try again");
}else if(guess > 0){
    alert("Nah man, now that's very low. even for you. Try again!");
    }
}while(guess !== correctAnswer);

