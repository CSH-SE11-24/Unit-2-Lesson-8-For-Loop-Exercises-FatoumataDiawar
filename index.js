// Task 1: Print Numbers
// Write a JavaScript program that uses a for loop to print all numbers from 1 to 10 to the console.

console.log("TASK 1:" )
for(let i = 1; i<= 10; i++){

  console.log(i)
}


// Task 2: Odd Numbers
// Write a JavaScript program that uses a for loop to print all odd numbers from 15 to 40 to the console.

console.log("TASK 2:" )
for(let x = 15; x < 40; x+= 2){
     console.log(x)
  
}


// Task 3: Sum of Numbers
// Write a JavaScript program that calculates and prints the sum of all numbers from 10 to 20 using a for loop.

console.log("TASK 3:" )
let sum = 0
for(let y = 10; y<= 20; y++){
  sum= sum+y
}
console.log(sum)
// Task 4: Array Iteration
// Create an array of numbers (e.g., [1, 2, 3, 4, 5]) and write a JavaScript program that uses a for loop to iterate through the array and print each element to the console.

console.log("TASK 4:" )
let  num = [1,2,3,4,5,6,7];
for(let z = 0; z < num.length; z++){
  console.log(num[z])
  
};



// Task 5: Array Sum
// Create an array of numbers and write a JavaScript program that calculates and prints the sum of all the elements in the array using a for loop.

console.log("TASK 5:" )
let num2 = [1,2,3,4,5];
let sum2 = 0

for(let a = 0; a < num2.length; a++ ){
  let index = num2[a]
  sum2 = index+ sum2
}
console.log(sum2)




// Stretch: Element counter
// Create an array of numbers
// Prompt the user for a number and write a for loop that tracks how many times that number is in the array
// e.g. 5 for [5, 1, 2, 5] --> 2





