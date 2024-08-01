//Part 1 Fizz Buzz
/*Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.*/

// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log((i), "Fizz")
//     }
//     else if (i % 5 === 0) {
//         console.log((i), "Buzz");
//     }
//     else if (i % 3 === 0 && i % 5 === 0) {
//         console.log((i), "Fizz Buzz");
//     }
//     else console.log((i), "not divisible by 3 or 5");
// }
// Part 2 Prime Time
/*Context: A prime number is any whole number greater than 1 
that cannot be exactly divided by any whole number other than itself and 1. 
For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself(5) and 1.
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop. */


let n = 7;
for (i = n; i <= 23 ; i++){
    if (n % i !== 0){
        console.log(i);
    }
    else {console.log("not prime");}
}